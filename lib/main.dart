import 'package:darkness_dungeon/menu.dart';
import 'package:darkness_dungeon/util/localization/my_localizations_delegate.dart';
import 'package:darkness_dungeon/util/sounds.dart';
import 'package:flame/flame.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_localizations/flutter_localizations.dart';

// Constants
const double tileSize = 32.0;
const String fontFamily = 'Normal';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();

  try {
    // Configure device settings for non-web platforms
    if (!kIsWeb) {
      await Flame.device.setLandscape();
      await Flame.device.fullScreen();
    }

    // Initialize sounds
    await Sounds.initialize();

    // Initialize localization delegate
    const MyLocalizationsDelegate myLocation = MyLocalizationsDelegate();

    // Run the app
    runApp(
      MaterialApp(
        debugShowCheckedModeBanner: false,
        theme: ThemeData(
          fontFamily: fontFamily,
        ),
        home: const Menu(),
        supportedLocales: MyLocalizationsDelegate.supportedLocales(),
        localizationsDelegates: [
          myLocation,
          DefaultCupertinoLocalizations.delegate,
          GlobalMaterialLocalizations.delegate,
          GlobalWidgetsLocalizations.delegate,
        ],
        localeResolutionCallback: myLocation.resolution,
      ),
    );
  } catch (e, stackTrace) {
    // Log errors for debugging
    debugPrint('Error during initialization: $e');
    debugPrintStack(stackTrace: stackTrace);
  }
}
