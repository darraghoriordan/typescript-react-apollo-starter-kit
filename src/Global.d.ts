/**
 * Type declerations for global development variables
 */

declare var global: any;

declare var __DEV__: boolean;

// tslint:disable-next-line
interface Window {
  // A hack for the Redux DevTools Chrome extension.
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: <F extends Function>(f: F) => F;
  __INITIAL_STATE__?: any;
  __APOLLO_STATE__?: any;
  devToolsExtension?: any;
  Intl?: any;
  ga: any;
}

// tslint:disable-next-line
interface NodeModule {
  hot?: any;
}
declare module 'react-router-scroll' {
  const _: any;
  export = _;
}

declare module 'write-file-webpack-plugin' {
  const _: any;
  export = _;
}

declare module 'gaze' {
  const _: any;
  export = _;
}

// tslint:disable-next-line
interface ObjectConstructor {
  assign(target: any, ...sources: any[]): any;
}

declare module '*.graphql' {
  const _: any;
  export = _;
  // export default  _;
}

declare module '*.gql' {
  const _: DocumentNode;
  export = _;
  // export default  _;
}

declare module '*.json' {
  const _: any;
  export = _;
}

declare module '*.css' {
  const _: any;
  export = _;
}

declare module '*.scss' {
  const _: any;
  export = _;
}

declare module '*.jpg' {
  const _: any;
  export = _;
}

declare module '*.png' {
  const _: any;
  export = _;
}

declare module 'isomorphic-style-loader/lib/withStyles' {
  export interface WrapWithStyles {
    <P>(component: ConstructClass<P>): ConstructClass<P>;
  }
  export interface InferableComponentEnhancerWithProps<TProps> {
    <P extends { new (...args: any[]): React.Component<any, any> }>(
      component: P
    ): React.Component<P>
  }
  export default function withStyles(styles?: Object): InferableComponentEnhancerWithProps;
}
