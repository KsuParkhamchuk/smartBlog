
export const saveUser = (userTokens: any) => {
    debugger
    localStorage.setItem("accessToken", userTokens.accessToken.access_token);
    localStorage.setItem("refreshToken", userTokens.accessToken.refresh_token);
    return {
      type: 'SAVE_USER',
      payload: userTokens.accessToken
    }
  }