//
//  SceneDelegate.swift
//  iOS (App)
//
//  Created by Vincent Spitale on 6/8/21.
//

import UIKit

class SceneDelegate: UIResponder, UIWindowSceneDelegate {

    var window: UIWindow?

    func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
        guard let windowScene = (scene as? UIWindowScene) else { return }
        
        #if targetEnvironment(macCatalyst)
           if let titlebar = windowScene.titlebar {
               titlebar.titleVisibility = .hidden
               titlebar.toolbar = nil
           }
       #endif
        
        let window = UIWindow(windowScene: windowScene)
        window.rootViewController = ViewController()
        self.window = window
        window.makeKeyAndVisible()
    }

}
