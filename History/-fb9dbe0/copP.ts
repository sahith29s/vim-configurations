import LazyResult from 'postcss/lib/lazy-result'
import { SourceMap } from 'postcss/lib/postcss'
import Processor from 'postcss/lib/processor'
import Result, { Message, ResultOptions } from 'postcss/lib/result'
import Root from 'postcss/lib/root'
import Warning from 'postcss/lib/warning'

declare namespace NoWorkResult {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  export { NoWorkResult_ as default }
}

/**
 * A Promise proxy for the result of PostCSS transformations.
 * This lazy result instance doesn't parse css unless `NoWorkResult#root` or `Result#root`
 * are accessed. See the example below for details.
 * A `NoWork` instance is returned by `Processor#process` ONLY when no plugins defined.
 *
 * ```js
 * const noWorkResult = postcss().process(css) // No plugins are defined.
 *                                             // CSS is not parsed
 * let root = noWorkResult.root // now css is parsed because we accessed the root
 * ```
 */
declare class NoWorkResult_ implements LazyResult {
  catch: Promise<Result>['catch']
  finally: Promise<Result>['finally']
  then: Promise<Result>['then']
  constructor(processor: Processor, css: string, opts: ResultOptions)
  async(): Promise<Result>
  get content(): string
  get css(): string
  get map(): SourceMap
  get messages(): Message[]
  get opts(): ResultOptions
  get processor(): Processor
  get root(): Root
  get [Symbol.toStringTag](): string
  sync(): Result
  toString(): string
  warnings(): Warning[]
}

declare class NoWorkResult extends NoWorkResult_ { }

export = NoWorkResult
