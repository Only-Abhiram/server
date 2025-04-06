export const generateToken = (user, message, statusCode, res) => {
  const token = user.generateJsonWebToken();
  console.log(token);
  // Determine the cookie name based on the user's role
  const cookieName = user.role === 'Admin' ? 'adminToken' : 'patientToken';

  // Calculate cookie expiration (24 hours from now)
  const cookieExpire = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

  res
    .status(statusCode)
    .cookie(cookieName, token, {
      expires: new Date(Date.now() + cookieExpire),
      httpOnly: true,
      secure: true,
      sameSite: "None",
    })
    .json({
      success: true,
      message,
      user,
      token,
    });
};

