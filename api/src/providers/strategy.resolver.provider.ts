import { Provider, ValueOrPromise } from '@loopback/core';
import { inject } from '@loopback/context';
import {
  AuthenticationBindings,
  AuthenticationMetadata,
} from '@loopback/authentication';
import { JWTStrategy } from '../authentication-strategies/JWT.strategy';
export class StrategyResolverProvider
  implements Provider<JWTStrategy | undefined> {
  constructor(
    @inject(AuthenticationBindings.METADATA)
    private metadata: AuthenticationMetadata,
  ) { }
  value(): ValueOrPromise<JWTStrategy | undefined> {
    if (!this.metadata) {
      return;
    }

    const name = this.metadata.strategy;
    // This should be extensible
    if (name === 'jwt') {
      return new JWTStrategy();
    } else {
      throw new Error(`The strategy ${name} is not available.`);
    }
  }
}
