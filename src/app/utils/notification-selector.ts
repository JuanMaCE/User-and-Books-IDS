export default interface NotificationSelector {
    getSender(to: string): Promise<void>
}
