import SemVer = require('semver/classes/semver');
import semver = require('semver');

declare namespace inc {
    /** Base number to be used for the prerelease identifier */
    type IdentifierBase = '0' | '1';
}

/**
 * Return the version incremented by the release type (major, minor, patch, or prerelease), or null if it's not valid.
 */
declare function inc(
    version: string | SemVer,
    release: semver.ReleaseType,
    optionsOrLoose?: boolean | semver.Options,
    identifier?: string
): string | null;
declare function inc(
    version: string | SemVer,
    release: semver.ReleaseType,
    identifier?: string,
    identifierBase?: inc.IdentifierBase | false,
): string | null;

export = inc;
