import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:google_fonts/google_fonts.dart';

class LoginButton extends StatefulWidget {
  const LoginButton({ Key? key, this.icon, this.lightMode, this.value }) : super(key: key);

  final FaIcon? icon;
  final bool? lightMode;
  final String? value;

  @override
    _LoginButtonState createState() => _LoginButtonState();
}

class _LoginButtonState extends State<LoginButton> {
  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: MediaQuery.of(context).size.width - 40,
              height: 65,
              child: TextButton.icon(
                icon: widget.icon!,
                style: ButtonStyle(
                  shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                    RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(14),
                    ),
                  ),
                  foregroundColor: MaterialStateProperty.all<Color>(
                    widget.lightMode! ? Color(
                      0xFF2D3748,
                    ) : Color(0xFFFFFFFF),
                  ),
                  backgroundColor: MaterialStateProperty.all<Color>(
                    widget.lightMode! ? Color(
                      0xFFF5F5F5,
                    ) : Color(0xFF404040),
                  ),
                ),
                label: Padding(
                  padding: const EdgeInsets.only(left: 25.0),
                  child: Text(
                    widget.value!,
                    style: GoogleFonts.nunitoSans(
                      fontSize: 20,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ),
                onPressed: () {},
              ),
            );
  }
}
