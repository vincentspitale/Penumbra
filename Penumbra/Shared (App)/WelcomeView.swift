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
                        Text("Vincent Spitale").font(Font.custom("SF Pro Rounded Regular", size: 14)).gradientForeground(colors: self.colors).padding(5)
                        Text("Olivia Heiner").font(Font.custom("SF Pro Rounded Regular", size: 14)).gradientForeground(colors: self.colors).padding(5)
                        Text("Evan Binder").font(Font.custom("SF Pro Rounded Regular", size: 14)).gradientForeground(colors: self.colors).padding(5)
                    }.padding(5).frame(width: 150, height: 150)
                        .rotation3DEffect(self.showingTeam ? Angle(degrees: 180): Angle(degrees: 0), axis: (x: CGFloat(0), y: CGFloat(-10), z: CGFloat(0)))
                } else {
                    Image("Logo").resizable().scaledToFit().frame(maxWidth: 150)
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

struct FlipEffect: GeometryEffect {

      var animatableData: Double {
            get { angle }
            set { angle = newValue }
      }

      @Binding var flipped: Bool
      var angle: Double
      let axis: (x: CGFloat, y: CGFloat)

      func effectValue(size: CGSize) -> ProjectionTransform {

            DispatchQueue.main.async {
                  self.flipped = self.angle >= 90 && self.angle < 270
            }

            let tweakedAngle = flipped ? -180 + angle : angle
            let a = CGFloat(Angle(degrees: tweakedAngle).radians)

            var transform3d = CATransform3DIdentity;
            transform3d.m34 = -1/max(size.width, size.height)

            transform3d = CATransform3DRotate(transform3d, a, axis.x, axis.y, 0)
            transform3d = CATransform3DTranslate(transform3d, -size.width/2.0, -size.height/2.0, 0)

            let affineTransform = ProjectionTransform(CGAffineTransform(translationX: size.width/2.0, y: size.height / 2.0))

            return ProjectionTransform(transform3d).concatenating(affineTransform)
      }
}
