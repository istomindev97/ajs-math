export default class Settings {
    constructor () {
        this.defaultSettings = new Map();

        this.userSettings = new Map();

        this.defaultSettings.set('theme', 'dark')
                            .set('music', 'trance')
                            .set('difficulty', 'easy')
    }

    changeSetting (parameter, option) {
        this.userSettings.set(parameter, option)
    }

    get settings () {
        const allSettings = new Map([...this.defaultSettings, ...this.userSettings]);
        return allSettings;
    }
}