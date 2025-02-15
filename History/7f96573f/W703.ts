import SemVer = require('semver/classes/semver');
import semver = require('semver');

/**
 * Sorts an array of semver entries in descending order using `compareBuild()`.
 */
declare function rsort<T extends string | SemVer>(list: T[], optionsOrLoose?: boolean | semver.Options): T[];

export = rsort;
