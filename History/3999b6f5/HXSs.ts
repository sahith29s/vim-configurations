import SemVer = require('semver/classes/semver');
import semver = require('semver');

/**
 * v1 != v2 The opposite of eq.
 */
declare function neq(v1: string | SemVer, v2: string | SemVer, optionsOrLoose?: boolean | semver.Options): boolean;

export = neq;
