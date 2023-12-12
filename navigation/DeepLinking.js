import { LinkingOptions } from '@react-navigation/native';
import { Linking } from 'react-native';
import { getActionFromState, getStateFromPath } from '@react-navigation/native';

export const linkingPrefix = 'mypostapp://';

export class DeepLinking {
  static linking = {
    prefixes: [linkingPrefix],
    config: {
      screens: {
        ['Settings']: {
          path: 'tab/settings',
        },
      },
    },
  };
  getInitialURL() {
    return null;
  }

  subscribe(listener) {
    const linkingSubscription = Linking.addEventListener('url', ({ url }) => {
      if (url === null) {
        return;
      }

      DeepLinking.handleNavigate(url);
      return () => {
        linkingSubscription.remove();
      };
    });
  }

  static handleInitialNavigate = async (initialUrl) => {
    if (initialUrl === null) {
      return;
    }

    await DeepLinking.handleNavigate(initialUrl, true);
  };

  static handleNavigate = async (url, isInitialNavigate) => {
    const action = DeepLinking.getActionFromState(
      DeepLinking.linking.config,
      url
    );

    switch (action?.type) {
      case 'NAVIGATE':
        const { name, params } = action.payload;
        if (name && params) {
          if (isInitialNavigate) {
            Navigation.replace(name, params); // наш кастомный навигатор
            return;
          }
          Navigation.navigate(name, params); // наш кастомный навигатор }
          return;
        }
    }
  };

  static getPathWithoutPrefix = (url) => {
    let path = '';
    DeepLinking.linking.prefixes.forEach((prefix) => {
      if (url.indexOf(prefix) > -1) {
        path = url.replace(prefix, '');
        return;
      }
    });
    return path;
  };

  static getActionFromState = (config, url) => {
    const path = DeepLinking.getPathWithoutPrefix(url);
    const state = getStateFromPath(path, config);
    if (!state) {
      return;
    }
    return getActionFromState(state, config);
  };
}
