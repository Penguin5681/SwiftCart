# Running the SwiftCart Flutter App

## Prerequisites
- Flutter SDK: [Install Flutter](https://flutter.dev/docs/get-started/install)
- Dart SDK: Included with Flutter
- Android Studio: [Download Android Studio](https://developer.android.com/studio)
- Xcode (for iOS development): [Download Xcode](https://developer.apple.com/xcode/)

## Setup

1. **Clone the Repository**
    ```sh
    git clone https://github.com/yourusername/SwiftCart.git
    cd SwiftCart
    ```

2. **Install Dependencies**
    ```sh
    flutter pub get
    ```

## Running on Android

1. **Set Up Android Device/Emulator**
    - Connect your Android device via USB, or start an Android emulator from Android Studio.

2. **Run the App**
    ```sh
    flutter run
    ```

## Running on iOS

1. **Set Up iOS Device/Simulator**
    - Connect your iOS device via USB, or start an iOS simulator from Xcode.

2. **Open iOS Project in Xcode**
    ```sh
    open ios/Runner.xcworkspace
    ```

3. **Select a Development Team**
    - In Xcode, navigate to `Runner` > `Signing & Capabilities` and select your development team.

4. **Run the App**
    ```sh
    flutter run
    ```

## Additional Tips

- **Hot Reload**: Use `r` in the terminal to hot reload while the app is running.
- **Debugging**: Use `flutter doctor` to troubleshoot any issues.

For more detailed information, refer to the [Flutter documentation](https://flutter.dev/docs).
