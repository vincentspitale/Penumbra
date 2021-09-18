//
//  WelcomeView.swift
//  Penumbra
//
//  Created by Vincent Spitale on 9/17/21.
//

import SwiftUI

struct WelcomeView: View {
    @State var showingTeam: Bool = false
    
    var colors: [Color] {
        #if os(macOS)
        return [.purple, .blue]
        #elseif os(iOS)
        return [.purple, .indigo]
        #endif
    }
    
    #if os(iOS)
    var body: some View {
        ZStack {
            VStack {
                interactive
                Text("Penumbra").font(.largeTitle).bold()
                    .gradientForeground(colors: self.colors)
                    .padding()
            }
            VStack {
                Spacer()
                Text("Enable the Safari extension in Settings :)")
                    .foregroundColor(.secondary)
                    .padding()
            }
        }
    }
    #elseif os(macOS)
    var body: some View {
        VStack {
            interactive
            Text("Penumbra").font(.largeTitle).bold()
                .gradientForeground(colors: self.colors)
                .padding()
            Text("Enable the extension in Safari preferences :)").foregroundColor(.secondary).padding()
        }
    }
    #endif
    
    var interactive: some View {
            VStack{
                if self.showingTeam {
                    VStack {
                        Text("Vincent Spitale").font(.headline).gradientForeground(colors: self.colors).padding()
                        Text("Evan Binder").font(.headline).gradientForeground(colors: self.colors).padding()
                        Text("Olivia Heiner").font(.headline).gradientForeground(colors: self.colors).padding()
                    }.padding()
                        .rotation3DEffect(self.showingTeam ? Angle(degrees: 180): Angle(degrees: 0), axis: (x: CGFloat(0), y: CGFloat(-10), z: CGFloat(0)))
                } else {
                    Image("LargeIcon").resizable().scaledToFit().frame(maxWidth: 120).padding(30)
                }
            }.background(Color.white)
            .cornerRadius(self.showingTeam ? 20 : 40)
                .rotation3DEffect(self.showingTeam ? Angle(degrees: 180): Angle(degrees: 0), axis: (x: CGFloat(0), y: CGFloat(-10), z: CGFloat(0)))
                .shadow(color: Color.purple.opacity(0.3), radius: 8.0, x: 0, y: 10)
                .padding(30)
                .onTapGesture {
                    withAnimation{self.showingTeam.toggle()}
                }
                .frame(height: 250)
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
