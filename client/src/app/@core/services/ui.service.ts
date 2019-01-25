import { Injectable } from '@angular/core';
import { NzMessageService, NzMessageDataFilled } from 'ng-zorro-antd';
const enum MessageType {
  Success = 'success',
  Error = 'error',
  Warning = 'warning'
}

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor(private message: NzMessageService) { }

  /**
   * @returns string
   */
  displayLoadingIndicator(message?: string): string {
    const displayedMessage = this.message
      .loading(message || 'Action in progress..', { nzDuration: 0 });
    return displayedMessage.messageId;
  }
  /**
   * @param  {string} messageId
   * @returns void
   */
  hideLoadingIndicator(messageId: string): void {
    this.hideMessage(messageId);
  }

  /**
   * @param  {string} messageId
   * @returns void
   */
  hideMessage(messageId: string): void {
    this.message.remove(messageId);
  }

  /**
   * @param  {MessageType} type
   * @param  {string} message?
   * @returns NzMessageDataFilled
   */
  displayMessage(type: MessageType, message?: string): NzMessageDataFilled {
    const displayedMessage = this.message.create(type, message || 'Action succeeded');
    return displayedMessage;
  }
  /**
   * @param  {string} message
   * @returns string
   */
  displaySuccessMessage(message?: string): string {
    const displayedMessage = this.displayMessage(MessageType.Success, message);
    return displayedMessage.messageId;
  }

  /**
   * @param  {string} message
   * @returns string
   */
  displayErrorMessage(message?: string): string {
    const displayedMessage = this.displayMessage(MessageType.Error, message);
    return displayedMessage.messageId;
  }


  /**
   * @param  {string} message
   * @returns string
   */
  displayWarningMessage(message?: string): string {
    const displayedMessage = this.displayMessage(MessageType.Warning, message);
    return displayedMessage.messageId;
  }
}
