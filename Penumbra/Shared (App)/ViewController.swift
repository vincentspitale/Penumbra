//
//  ViewController.swift
//  Shared (App)
//
//  Created by Vincent Spitale on 6/8/21.
//

import WebKit
import SwiftUI

#if os(iOS)
import UIKit
typealias PlatformViewController = UIViewController
#elseif os(macOS)
import Cocoa
import SafariServices
typealias PlatformViewController = NSViewController
#endif

let extensionBundleIdentifier = "com.yourCompany.Penumbra.Extension"

class ViewController: PlatformViewController, WKNavigationDelegate, WKScriptMessageHandler {

    lazy var webView: WKWebView = {
        let webView = WKWebView()
        webView.translatesAutoresizingMaskIntoConstraints = false
        return webView
    }()

    override func viewDidLoad() {
        super.viewDidLoad()
        
        self.view.addSubview(webView)
        webView.isHidden = true
        
        #if os(iOS)
        let viewController = UIHostingController(rootView: WelcomeView())
        #elseif os(macOS)
        let viewController = NSHostingController(rootView: WelcomeView())
        #endif
        
        viewController.view.translatesAutoresizingMaskIntoConstraints = false
        self.view.addSubview(viewController.view)
        
        let constraints = [
            webView.widthAnchor.constraint(equalTo: self.view.widthAnchor),
            webView.heightAnchor.constraint(equalTo: self.view.heightAnchor),
            viewController.view.widthAnchor.constraint(equalTo: self.view.widthAnchor),
            viewController.view.heightAnchor.constraint(equalTo: self.view.heightAnchor)
        ]
        
        NSLayoutConstraint.activate(constraints)

        self.webView.navigationDelegate = self

#if os(iOS)
        self.webView.scrollView.isScrollEnabled = false
#endif

        self.webView.configuration.userContentController.add(self, name: "controller")

        self.webView.loadFileURL(Bundle.main.url(forResource: "Main", withExtension: "html")!, allowingReadAccessTo: Bundle.main.resourceURL!)
    }

    func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
#if os(iOS)
        webView.evaluateJavaScript("show('ios')")
#elseif os(macOS)
        webView.evaluateJavaScript("show('mac')")

        SFSafariExtensionManager.getStateOfSafariExtension(withIdentifier: extensionBundleIdentifier) { (state, error) in
            guard let state = state, error == nil else {
                // Insert code to inform the user that something went wrong.
                return
            }

            DispatchQueue.main.async {
                webView.evaluateJavaScript("show('mac', \(state.isEnabled)")
            }
        }
#endif
    }
    
    #if os(macOS)
    override func loadView() {
        self.view = NSView(frame: NSRect(x: 0, y: 0, width: NSScreen.main?.frame.width ?? 100, height: NSScreen.main?.frame.height ?? 100))
    }
    #endif

    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
#if os(macOS)
        if (message.body as! String != "open-preferences") {
            return;
        }

        SFSafariApplication.showPreferencesForExtension(withIdentifier: extensionBundleIdentifier) { error in
            guard error == nil else {
                // Insert code to inform the user that something went wrong.
                return
            }

            DispatchQueue.main.async {
                NSApplication.shared.terminate(nil)
            }
        }
#endif
    }

}
