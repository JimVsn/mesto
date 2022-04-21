import { profileTitle, profileSubtitle } from "./index.js"

export class UserInfo {
  constructor({elementProfileInfo, elementProfileName}) {
    this._elementProfileInfo = document.querySelector(elementProfileInfo);
    this._elementProfileName = document.querySelector(elementProfileName);
    this._profileTitle = profileTitle;
    this._profileSubtitle = profileSubtitle;
  }

  getUserInfo() {
    this._elementProfileName.value = this._profileTitle.textContent;
    this._elementProfileInfo.value = this._profileSubtitle.textContent;
  }

  setUserInfo() {
    this._profileTitle.textContent = this._elementProfileName.value;
    this._profileSubtitle.textContent = this._elementProfileInfo.value;
  }
}