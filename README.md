# cyberdeck-runner

Please not that this application is currently in an early beta state.

**cyberdeck-runner** is a SPA designed to simulate a Cyberdeck as used in the
[Shadowrun Fifth Edition](https://en.wikipedia.org/wiki/Shadowrun) tabletop role playing game. The
cyberdeck is a device which permits a ~~hacker~~ user nearly unlimited access to the matrix (Shadowrun's
version of the internet) via augmented or virtual reality with a direct connection to the user's
brain.  

**cyberdeck-runner** allows the player to customize all statistics relevant to the use of a cyberdeck,
including those for the character, the cyberdeck itself, various augmentations, performance enhancing
checmicals and the hacking environment.  From that point, the player can choose to undertake desired
matrix actions, specify the opposition and the application will provide dice rolls and provide estimated
odds of success.

Please note that I am somewhat new to Shadowrun and may have failed to accurately model the matrix
rules system.  *If you are a seasoned Shadowrun veteran and identify any errors in the emulator,
please feel free to open an [issue](https://github.com/adamfitzpatrick/cyberdeck-runner/issues/new).*

## Development

This application was designed for development with NodeJs 12.X.X and NPM 6.X.X

Install dependencies:

```bash
npm install
```

Start the webpack server:

```bash
npm start
```

Build for deployment: 

```bash
webpack -p
```

### Mock Data

In development mode, the application will load a window-level function called `__populateMockData`.
Execute the function in the browser console to load mock data for use with development.