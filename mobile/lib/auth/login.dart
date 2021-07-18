import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

class Login extends StatefulWidget {
  @override
  _LoginState createState() => _LoginState();
}

class _LoginState extends State<Login> {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        backgroundColor: Colors.white,
        body: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          children: [
            Padding(
              padding: const EdgeInsets.only(
                top: 18.0,
                left: 36.0,
              ),
              child: Row(
                children: [
                  Text(
                    'Login',
                    style: GoogleFonts.montserrat(
                      color: Color(
                        0xFF695CFF,
                      ),
                      fontSize: 17.0,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.only(left: 30.0),
                    child: Text(
                      'Create Account',
                      style: GoogleFonts.montserrat(
                        fontWeight: FontWeight.w600,
                        color: Color(0xFF2D3748),
                        fontSize: 16.5,
                      ),
                    ),
                  ),
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.only(top: 13.0),
              child: Divider(
                color: Color(0xFFBFBFBF),
                thickness: 0.75,
              ),
            ),
            Padding(
              padding: const EdgeInsets.only(
                top: 35.0,
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    'Login To ',
                    style: GoogleFonts.montserrat(
                      fontSize: 35.0,
                      fontWeight: FontWeight.w600,
                      color: Color(0xFF2D3748),
                    ),
                  ),
                  Text(
                    'Hydralite',
                    style: GoogleFonts.montserrat(
                      fontSize: 35.0,
                      fontWeight: FontWeight.w600,
                      color: Color(0xFF695CFF),
                    ),
                  ),
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.only(
                top: 5.0,
              ),
              child: Text(
                'Discover. Develop. Deploy.',
                style: GoogleFonts.montserrat(
                  fontSize: 21,
                  fontWeight: FontWeight.w700,
                  color: Color(0xFF2D3748),
                ),
              ),
            ),
            SizedBox(
              height: 50,
            ),
            SizedBox(
              width: MediaQuery.of(context).size.width - 40,
              height: 65,
              child: TextButton.icon(
                icon: FaIcon(
                  FontAwesomeIcons.google,
                ),
                style: ButtonStyle(
                  shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                    RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(14),
                    ),
                  ),
                  foregroundColor: MaterialStateProperty.all<Color>(
                    Color(
                      0xFF2D3748,
                    ),
                  ),
                  backgroundColor: MaterialStateProperty.all<Color>(
                    Color(
                      0xFFF5F5F5,
                    ),
                  ),
                ),
                label: Padding(
                  padding: const EdgeInsets.only(left: 25.0),
                  child: Text(
                    'Continue With Google',
                    style: GoogleFonts.nunitoSans(
                      fontSize: 20,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ),
                onPressed: () {},
              ),
            ),
            SizedBox(
              height: 15,
            ),
            SizedBox(
              width: MediaQuery.of(context).size.width - 40,
              height: 65,
              child: TextButton.icon(
                icon: FaIcon(
                  FontAwesomeIcons.github,
                ),
                style: ButtonStyle(
                  shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                    RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(14),
                    ),
                  ),
                  foregroundColor: MaterialStateProperty.all<Color>(
                    Color(
                      0xFF2D3748,
                    ),
                  ),
                  backgroundColor: MaterialStateProperty.all<Color>(
                    Color(
                      0xFFF5F5F5,
                    ),
                  ),
                ),
                label: Padding(
                  padding: const EdgeInsets.only(left: 25.0),
                  child: Text(
                    'Continue With Github',
                    style: GoogleFonts.nunitoSans(
                      fontSize: 20,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ),
                onPressed: () {},
              ),
            ),
            SizedBox(
              height: 15,
            ),
            SizedBox(
              width: MediaQuery.of(context).size.width - 40,
              height: 65,
              child: TextButton.icon(
                icon: FaIcon(
                  FontAwesomeIcons.twitter,
                ),
                style: ButtonStyle(
                  shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                    RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(14),
                    ),
                  ),
                  foregroundColor: MaterialStateProperty.all<Color>(
                    Color(
                      0xFF2D3748,
                    ),
                  ),
                  backgroundColor: MaterialStateProperty.all<Color>(
                    Color(
                      0xFFF5F5F5,
                    ),
                  ),
                ),
                label: Padding(
                  padding: const EdgeInsets.only(left: 25.0),
                  child: Text(
                    'Continue With Twitter',
                    style: GoogleFonts.nunitoSans(
                      fontSize: 20,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ),
                onPressed: () {},
              ),
            ),
            SizedBox(
              height: 15,
            ),
            SizedBox(
              width: MediaQuery.of(context).size.width - 40,
              height: 65,
              child: TextButton.icon(
                icon: FaIcon(
                  FontAwesomeIcons.discord,
                ),
                style: ButtonStyle(
                  shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                    RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(14),
                    ),
                  ),
                  foregroundColor: MaterialStateProperty.all<Color>(
                    Color(
                      0xFF2D3748,
                    ),
                  ),
                  backgroundColor: MaterialStateProperty.all<Color>(
                    Color(
                      0xFFF5F5F5,
                    ),
                  ),
                ),
                label: Padding(
                  padding: const EdgeInsets.only(left: 25.0),
                  child: Text(
                    'Continue With Discord',
                    style: GoogleFonts.nunitoSans(
                      fontSize: 20,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ),
                onPressed: () {},
              ),
            ),
            Padding(
              padding: const EdgeInsets.only(top: 75.0),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    'By continuing, you agree to our ',
                    style: GoogleFonts.montserrat(
                      fontSize: 14.5,
                      fontWeight: FontWeight.w400,
                    ),
                  ),
                  Text(
                    'Terms & Privacy',
                    style: GoogleFonts.montserrat(
                      color: Color(
                        0xFF695CFF,
                      ),
                      fontSize: 14.5,
                      fontWeight: FontWeight.w500,
                    ),
                  )
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}
