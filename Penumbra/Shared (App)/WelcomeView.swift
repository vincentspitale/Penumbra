//
//  WelcomeView.swift
//  Penumbra
//
//  Created by Vincent Spitale on 9/17/21.
//

import SwiftUI

struct WelcomeView: View {
    var body: some View {
        VStack {
            Image("Logo").resizable().scaledToFit().frame(maxWidth: 200)
                .shadow(color: Color.purple.opacity(0.3), radius: 8.0, x: 0, y: 10)
                .padding(50)
            Text("Penumbra").font(.largeTitle).bold()
                .gradientForeground(colors: [.purple, .indigo])
        }
    }
}

struct WelcomeView_Previews: PreviewProvider {
    static var previews: some View {
        WelcomeView()
    }
}

extension View {
    public func gradientForeground(colors: [Color]) -> some View {
        self.overlay(LinearGradient(gradient: .init(colors: colors),
                                    startPoint: .topLeading,
                                    endPoint: .bottomTrailing))
            .mask(self)
    }
}
