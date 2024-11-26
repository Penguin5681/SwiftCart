
# SwiftCart  

SwiftCart is a fast and modern ecommerce app offering a seamless shopping experience. The app is currently under active development, with two primary branches:  

- **prod**: Contains stable, bug-free code ready for production.  
- **dev**: Actively developed branch with the latest features and updates.  

## Features  
- User-friendly interface for effortless navigation.  
- Secure checkout and payment processing.  
- Advanced search and filtering options.  
- Wishlist and cart management.  

## CI/CD Workflow  
Both branches have CI/CD workflows set up to generate a release build APK. Users can download the latest APK directly from the workflow artifacts for testing or production use.  

## Running the App Locally  

1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/swiftcart.git
   cd swiftcart
   ```

2. Switch to the desired branch:
   - For production:
     ```bash
     git checkout prod
     ```
   - For development:
     ```bash
     git checkout dev
     ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npx react-native start
   ```

5. Run the app on a device or emulator:
   - For Android:
     ```bash
     npx react-native run-android
     ```
   - For iOS:
     ```bash
     npx react-native run-ios
     ```

Enjoy using SwiftCart, and stay tuned for updates as development progresses!
