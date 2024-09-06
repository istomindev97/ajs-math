import Settings from '../settings';

const settings = new Settings();

test('должны поменяться дефолтные настройки', () => {
    settings.changeSetting('difficulty', 'nightmare');
    settings.changeSetting('music', 'pop'); 

    const currentSettings = settings.settings;
  
    const expectedSettings = new Map([
        ['theme', 'dark'],
        ['music', 'pop'], 
        ['difficulty', 'nightmare']
    ]);

    expect(currentSettings).toEqual(expectedSettings);
});