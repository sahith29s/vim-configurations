import semver = require('semver');
import Comparator = require('semver/classes/comparator');
import SemVer = require('semver/classes/semver');

declare class Range {
    constructor(range: string | Range, optionsOrLoose?: boolean | semver.RangeOptions);

    range: string;
    raw: string;
    loose: boolean;
    options: semver.Options;
    includePrerelease: boolean;
    format(): string;
    inspect(): string;

    set: ReadonlyArray<ReadonlyArray<Comparator>>;
    parseRange(range: string): ReadonlyArray<Comparator>;
    test(version: string | SemVer): boolean;
    intersects(range: Range, optionsOrLoose?: boolean | semver.Options): boolean;
}
export = Range;
