//
//  AppDelegate.swift
//  macOS (App)
//
//  Created by Vincent Spitale on 6/8/21.
//

import Cocoa

class AppDelegate: NSObject, NSApplicationDelegate {

    func applicationDidFinishLaunching(_ notification: Notification) {
        // Override point for customization after application launch.
        let window = NSWindow(contentRect: NSMakeRect(0, 0, NSScreen.main?.frame.width ?? 100, NSScreen.main?.frame.height ?? 100), // for full height and width of screen
                              styleMask: [.miniaturizable, .closable, .resizable, .titled],
        backing: .buffered,
        defer: false)
        window.title = "Penumbra"
        window.titlebarAppearsTransparent = true
        window.titleVisibility = .hidden
        window.styleMask.remove(.resizable)
        window.contentViewController = ViewController()
        window.makeKeyAndOrderFront(nil)
    }

    func applicationShouldTerminateAfterLastWindowClosed(_ sender: NSApplication) -> Bool {
        true
    }

}
