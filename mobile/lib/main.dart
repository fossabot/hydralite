import 'package:flutter/material.dart';

import 'auth/login.dart';

void main() => runApp(Hydralite());

class Hydralite extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData.light(), // Provide light theme.
      darkTheme: ThemeData.dark(), // Provide dark theme.
      themeMode: ThemeMode.system,
      debugShowCheckedModeBanner: false,
      home: Login(),
    );
  }
}
