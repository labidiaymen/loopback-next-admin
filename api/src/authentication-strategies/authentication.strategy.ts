
import { UserProfile } from '@loopback/authentication';
import { Request } from '@loopback/rest';

/**
 * An interface describes the common authentication strategy.
 *
 * An authentication strategy is usually a class with an
 * authenticate method that verifies a user's identity and
 * returns the corresponding user profile.
 *
 * Please note this file should be moved to @loopback/authentication
 */
export interface AuthenticationStrategy {
  authenticate(request: Request): Promise<UserProfile | undefined>;
}
