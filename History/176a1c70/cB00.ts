import Range = require('semver/classes/range');
import semver = require('semver');

/**
 * Return the valid range or null if it's not valid
 */
declare function validRange(
    range: string | Range | null | undefined,
    optionsOrLoose?: boolean | semver.RangeOptions,
): string | null;

export = validRange;
