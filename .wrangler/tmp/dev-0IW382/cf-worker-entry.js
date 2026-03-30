var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../../../Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/_internal/utils.mjs
// @__NO_SIDE_EFFECTS__
function createNotImplementedError(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
// @__NO_SIDE_EFFECTS__
function notImplemented(name) {
  const fn = /* @__PURE__ */ __name(() => {
    throw /* @__PURE__ */ createNotImplementedError(name);
  }, "fn");
  return Object.assign(fn, { __unenv__: true });
}
// @__NO_SIDE_EFFECTS__
function notImplementedAsync(name) {
  const fn = /* @__PURE__ */ notImplemented(name);
  fn.__promisify__ = () => /* @__PURE__ */ notImplemented(name + ".__promisify__");
  fn.native = fn;
  return fn;
}
// @__NO_SIDE_EFFECTS__
function notImplementedClass(name) {
  return class {
    __unenv__ = true;
    constructor() {
      throw new Error(`[unenv] ${name} is not implemented yet!`);
    }
  };
}
var init_utils = __esm({
  "../../../Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/_internal/utils.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(createNotImplementedError, "createNotImplementedError");
    __name(notImplemented, "notImplemented");
    __name(notImplementedAsync, "notImplementedAsync");
    __name(notImplementedClass, "notImplementedClass");
  }
});

// ../../../Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs
var _timeOrigin, _performanceNow, nodeTiming, PerformanceEntry, PerformanceMark, PerformanceMeasure, PerformanceResourceTiming, PerformanceObserverEntryList, Performance, PerformanceObserver, performance;
var init_performance = __esm({
  "../../../Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    _timeOrigin = globalThis.performance?.timeOrigin ?? Date.now();
    _performanceNow = globalThis.performance?.now ? globalThis.performance.now.bind(globalThis.performance) : () => Date.now() - _timeOrigin;
    nodeTiming = {
      name: "node",
      entryType: "node",
      startTime: 0,
      duration: 0,
      nodeStart: 0,
      v8Start: 0,
      bootstrapComplete: 0,
      environment: 0,
      loopStart: 0,
      loopExit: 0,
      idleTime: 0,
      uvMetricsInfo: {
        loopCount: 0,
        events: 0,
        eventsWaiting: 0
      },
      detail: void 0,
      toJSON() {
        return this;
      }
    };
    PerformanceEntry = class {
      static {
        __name(this, "PerformanceEntry");
      }
      __unenv__ = true;
      detail;
      entryType = "event";
      name;
      startTime;
      constructor(name, options) {
        this.name = name;
        this.startTime = options?.startTime || _performanceNow();
        this.detail = options?.detail;
      }
      get duration() {
        return _performanceNow() - this.startTime;
      }
      toJSON() {
        return {
          name: this.name,
          entryType: this.entryType,
          startTime: this.startTime,
          duration: this.duration,
          detail: this.detail
        };
      }
    };
    PerformanceMark = class PerformanceMark2 extends PerformanceEntry {
      static {
        __name(this, "PerformanceMark");
      }
      entryType = "mark";
      constructor() {
        super(...arguments);
      }
      get duration() {
        return 0;
      }
    };
    PerformanceMeasure = class extends PerformanceEntry {
      static {
        __name(this, "PerformanceMeasure");
      }
      entryType = "measure";
    };
    PerformanceResourceTiming = class extends PerformanceEntry {
      static {
        __name(this, "PerformanceResourceTiming");
      }
      entryType = "resource";
      serverTiming = [];
      connectEnd = 0;
      connectStart = 0;
      decodedBodySize = 0;
      domainLookupEnd = 0;
      domainLookupStart = 0;
      encodedBodySize = 0;
      fetchStart = 0;
      initiatorType = "";
      name = "";
      nextHopProtocol = "";
      redirectEnd = 0;
      redirectStart = 0;
      requestStart = 0;
      responseEnd = 0;
      responseStart = 0;
      secureConnectionStart = 0;
      startTime = 0;
      transferSize = 0;
      workerStart = 0;
      responseStatus = 0;
    };
    PerformanceObserverEntryList = class {
      static {
        __name(this, "PerformanceObserverEntryList");
      }
      __unenv__ = true;
      getEntries() {
        return [];
      }
      getEntriesByName(_name, _type) {
        return [];
      }
      getEntriesByType(type2) {
        return [];
      }
    };
    Performance = class {
      static {
        __name(this, "Performance");
      }
      __unenv__ = true;
      timeOrigin = _timeOrigin;
      eventCounts = /* @__PURE__ */ new Map();
      _entries = [];
      _resourceTimingBufferSize = 0;
      navigation = void 0;
      timing = void 0;
      timerify(_fn, _options) {
        throw createNotImplementedError("Performance.timerify");
      }
      get nodeTiming() {
        return nodeTiming;
      }
      eventLoopUtilization() {
        return {};
      }
      markResourceTiming() {
        return new PerformanceResourceTiming("");
      }
      onresourcetimingbufferfull = null;
      now() {
        if (this.timeOrigin === _timeOrigin) {
          return _performanceNow();
        }
        return Date.now() - this.timeOrigin;
      }
      clearMarks(markName) {
        this._entries = markName ? this._entries.filter((e) => e.name !== markName) : this._entries.filter((e) => e.entryType !== "mark");
      }
      clearMeasures(measureName) {
        this._entries = measureName ? this._entries.filter((e) => e.name !== measureName) : this._entries.filter((e) => e.entryType !== "measure");
      }
      clearResourceTimings() {
        this._entries = this._entries.filter((e) => e.entryType !== "resource" || e.entryType !== "navigation");
      }
      getEntries() {
        return this._entries;
      }
      getEntriesByName(name, type2) {
        return this._entries.filter((e) => e.name === name && (!type2 || e.entryType === type2));
      }
      getEntriesByType(type2) {
        return this._entries.filter((e) => e.entryType === type2);
      }
      mark(name, options) {
        const entry = new PerformanceMark(name, options);
        this._entries.push(entry);
        return entry;
      }
      measure(measureName, startOrMeasureOptions, endMark) {
        let start;
        let end;
        if (typeof startOrMeasureOptions === "string") {
          start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
          end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
        } else {
          start = Number.parseFloat(startOrMeasureOptions?.start) || this.now();
          end = Number.parseFloat(startOrMeasureOptions?.end) || this.now();
        }
        const entry = new PerformanceMeasure(measureName, {
          startTime: start,
          detail: {
            start,
            end
          }
        });
        this._entries.push(entry);
        return entry;
      }
      setResourceTimingBufferSize(maxSize) {
        this._resourceTimingBufferSize = maxSize;
      }
      addEventListener(type2, listener, options) {
        throw createNotImplementedError("Performance.addEventListener");
      }
      removeEventListener(type2, listener, options) {
        throw createNotImplementedError("Performance.removeEventListener");
      }
      dispatchEvent(event) {
        throw createNotImplementedError("Performance.dispatchEvent");
      }
      toJSON() {
        return this;
      }
    };
    PerformanceObserver = class {
      static {
        __name(this, "PerformanceObserver");
      }
      __unenv__ = true;
      static supportedEntryTypes = [];
      _callback = null;
      constructor(callback) {
        this._callback = callback;
      }
      takeRecords() {
        return [];
      }
      disconnect() {
        throw createNotImplementedError("PerformanceObserver.disconnect");
      }
      observe(options) {
        throw createNotImplementedError("PerformanceObserver.observe");
      }
      bind(fn) {
        return fn;
      }
      runInAsyncScope(fn, thisArg, ...args) {
        return fn.call(thisArg, ...args);
      }
      asyncId() {
        return 0;
      }
      triggerAsyncId() {
        return 0;
      }
      emitDestroy() {
        return this;
      }
    };
    performance = globalThis.performance && "addEventListener" in globalThis.performance ? globalThis.performance : new Performance();
  }
});

// ../../../Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/perf_hooks.mjs
var init_perf_hooks = __esm({
  "../../../Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/perf_hooks.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_performance();
  }
});

// ../../../Roaming/npm/node_modules/wrangler/node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs
var init_performance2 = __esm({
  "../../../Roaming/npm/node_modules/wrangler/node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs"() {
    init_perf_hooks();
    if (!("__unenv__" in performance)) {
      const proto = Performance.prototype;
      for (const key of Object.getOwnPropertyNames(proto)) {
        if (key !== "constructor" && !(key in performance)) {
          const desc = Object.getOwnPropertyDescriptor(proto, key);
          if (desc) {
            Object.defineProperty(performance, key, desc);
          }
        }
      }
    }
    globalThis.performance = performance;
    globalThis.Performance = Performance;
    globalThis.PerformanceEntry = PerformanceEntry;
    globalThis.PerformanceMark = PerformanceMark;
    globalThis.PerformanceMeasure = PerformanceMeasure;
    globalThis.PerformanceObserver = PerformanceObserver;
    globalThis.PerformanceObserverEntryList = PerformanceObserverEntryList;
    globalThis.PerformanceResourceTiming = PerformanceResourceTiming;
  }
});

// ../../../Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/mock/noop.mjs
var noop_default;
var init_noop = __esm({
  "../../../Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/mock/noop.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    noop_default = Object.assign(() => {
    }, { __unenv__: true });
  }
});

// ../../../Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/console.mjs
import { Writable } from "node:stream";
var _console, _ignoreErrors, _stderr, _stdout, log, info, trace, debug, table, error, warn, createTask, clear, count, countReset, dir, dirxml, group, groupEnd, groupCollapsed, profile, profileEnd, time, timeEnd, timeLog, timeStamp, Console, _times, _stdoutErrorHandler, _stderrErrorHandler;
var init_console = __esm({
  "../../../Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/console.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_noop();
    init_utils();
    _console = globalThis.console;
    _ignoreErrors = true;
    _stderr = new Writable();
    _stdout = new Writable();
    log = _console?.log ?? noop_default;
    info = _console?.info ?? log;
    trace = _console?.trace ?? info;
    debug = _console?.debug ?? log;
    table = _console?.table ?? log;
    error = _console?.error ?? log;
    warn = _console?.warn ?? error;
    createTask = _console?.createTask ?? /* @__PURE__ */ notImplemented("console.createTask");
    clear = _console?.clear ?? noop_default;
    count = _console?.count ?? noop_default;
    countReset = _console?.countReset ?? noop_default;
    dir = _console?.dir ?? noop_default;
    dirxml = _console?.dirxml ?? noop_default;
    group = _console?.group ?? noop_default;
    groupEnd = _console?.groupEnd ?? noop_default;
    groupCollapsed = _console?.groupCollapsed ?? noop_default;
    profile = _console?.profile ?? noop_default;
    profileEnd = _console?.profileEnd ?? noop_default;
    time = _console?.time ?? noop_default;
    timeEnd = _console?.timeEnd ?? noop_default;
    timeLog = _console?.timeLog ?? noop_default;
    timeStamp = _console?.timeStamp ?? noop_default;
    Console = _console?.Console ?? /* @__PURE__ */ notImplementedClass("console.Console");
    _times = /* @__PURE__ */ new Map();
    _stdoutErrorHandler = noop_default;
    _stderrErrorHandler = noop_default;
  }
});

// ../../../Roaming/npm/node_modules/wrangler/node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs
var workerdConsole, assert, clear2, context, count2, countReset2, createTask2, debug2, dir2, dirxml2, error2, group2, groupCollapsed2, groupEnd2, info2, log2, profile2, profileEnd2, table2, time2, timeEnd2, timeLog2, timeStamp2, trace2, warn2, console_default;
var init_console2 = __esm({
  "../../../Roaming/npm/node_modules/wrangler/node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_console();
    workerdConsole = globalThis["console"];
    ({
      assert,
      clear: clear2,
      context: (
        // @ts-expect-error undocumented public API
        context
      ),
      count: count2,
      countReset: countReset2,
      createTask: (
        // @ts-expect-error undocumented public API
        createTask2
      ),
      debug: debug2,
      dir: dir2,
      dirxml: dirxml2,
      error: error2,
      group: group2,
      groupCollapsed: groupCollapsed2,
      groupEnd: groupEnd2,
      info: info2,
      log: log2,
      profile: profile2,
      profileEnd: profileEnd2,
      table: table2,
      time: time2,
      timeEnd: timeEnd2,
      timeLog: timeLog2,
      timeStamp: timeStamp2,
      trace: trace2,
      warn: warn2
    } = workerdConsole);
    Object.assign(workerdConsole, {
      Console,
      _ignoreErrors,
      _stderr,
      _stderrErrorHandler,
      _stdout,
      _stdoutErrorHandler,
      _times
    });
    console_default = workerdConsole;
  }
});

// ../../../Roaming/npm/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console = __esm({
  "../../../Roaming/npm/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console"() {
    init_console2();
    globalThis.console = console_default;
  }
});

// ../../../Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs
var hrtime;
var init_hrtime = __esm({
  "../../../Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    hrtime = /* @__PURE__ */ Object.assign(/* @__PURE__ */ __name(function hrtime2(startTime) {
      const now = Date.now();
      const seconds = Math.trunc(now / 1e3);
      const nanos = now % 1e3 * 1e6;
      if (startTime) {
        let diffSeconds = seconds - startTime[0];
        let diffNanos = nanos - startTime[0];
        if (diffNanos < 0) {
          diffSeconds = diffSeconds - 1;
          diffNanos = 1e9 + diffNanos;
        }
        return [diffSeconds, diffNanos];
      }
      return [seconds, nanos];
    }, "hrtime"), { bigint: /* @__PURE__ */ __name(function bigint() {
      return BigInt(Date.now() * 1e6);
    }, "bigint") });
  }
});

// ../../../Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs
var ReadStream;
var init_read_stream = __esm({
  "../../../Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    ReadStream = class {
      static {
        __name(this, "ReadStream");
      }
      fd;
      isRaw = false;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      setRawMode(mode) {
        this.isRaw = mode;
        return this;
      }
    };
  }
});

// ../../../Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs
var WriteStream;
var init_write_stream = __esm({
  "../../../Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    WriteStream = class {
      static {
        __name(this, "WriteStream");
      }
      fd;
      columns = 80;
      rows = 24;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      clearLine(dir3, callback) {
        callback && callback();
        return false;
      }
      clearScreenDown(callback) {
        callback && callback();
        return false;
      }
      cursorTo(x, y, callback) {
        callback && typeof callback === "function" && callback();
        return false;
      }
      moveCursor(dx, dy, callback) {
        callback && callback();
        return false;
      }
      getColorDepth(env2) {
        return 1;
      }
      hasColors(count3, env2) {
        return false;
      }
      getWindowSize() {
        return [this.columns, this.rows];
      }
      write(str, encoding, cb) {
        if (str instanceof Uint8Array) {
          str = new TextDecoder().decode(str);
        }
        try {
          console.log(str);
        } catch {
        }
        cb && typeof cb === "function" && cb();
        return false;
      }
    };
  }
});

// ../../../Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/tty.mjs
var init_tty = __esm({
  "../../../Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/tty.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_read_stream();
    init_write_stream();
  }
});

// ../../../Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs
var NODE_VERSION;
var init_node_version = __esm({
  "../../../Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    NODE_VERSION = "22.14.0";
  }
});

// ../../../Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/process/process.mjs
import { EventEmitter } from "node:events";
var Process;
var init_process = __esm({
  "../../../Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/process/process.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_tty();
    init_utils();
    init_node_version();
    Process = class _Process extends EventEmitter {
      static {
        __name(this, "Process");
      }
      env;
      hrtime;
      nextTick;
      constructor(impl) {
        super();
        this.env = impl.env;
        this.hrtime = impl.hrtime;
        this.nextTick = impl.nextTick;
        for (const prop of [...Object.getOwnPropertyNames(_Process.prototype), ...Object.getOwnPropertyNames(EventEmitter.prototype)]) {
          const value = this[prop];
          if (typeof value === "function") {
            this[prop] = value.bind(this);
          }
        }
      }
      // --- event emitter ---
      emitWarning(warning, type2, code) {
        console.warn(`${code ? `[${code}] ` : ""}${type2 ? `${type2}: ` : ""}${warning}`);
      }
      emit(...args) {
        return super.emit(...args);
      }
      listeners(eventName) {
        return super.listeners(eventName);
      }
      // --- stdio (lazy initializers) ---
      #stdin;
      #stdout;
      #stderr;
      get stdin() {
        return this.#stdin ??= new ReadStream(0);
      }
      get stdout() {
        return this.#stdout ??= new WriteStream(1);
      }
      get stderr() {
        return this.#stderr ??= new WriteStream(2);
      }
      // --- cwd ---
      #cwd = "/";
      chdir(cwd2) {
        this.#cwd = cwd2;
      }
      cwd() {
        return this.#cwd;
      }
      // --- dummy props and getters ---
      arch = "";
      platform = "";
      argv = [];
      argv0 = "";
      execArgv = [];
      execPath = "";
      title = "";
      pid = 200;
      ppid = 100;
      get version() {
        return `v${NODE_VERSION}`;
      }
      get versions() {
        return { node: NODE_VERSION };
      }
      get allowedNodeEnvironmentFlags() {
        return /* @__PURE__ */ new Set();
      }
      get sourceMapsEnabled() {
        return false;
      }
      get debugPort() {
        return 0;
      }
      get throwDeprecation() {
        return false;
      }
      get traceDeprecation() {
        return false;
      }
      get features() {
        return {};
      }
      get release() {
        return {};
      }
      get connected() {
        return false;
      }
      get config() {
        return {};
      }
      get moduleLoadList() {
        return [];
      }
      constrainedMemory() {
        return 0;
      }
      availableMemory() {
        return 0;
      }
      uptime() {
        return 0;
      }
      resourceUsage() {
        return {};
      }
      // --- noop methods ---
      ref() {
      }
      unref() {
      }
      // --- unimplemented methods ---
      umask() {
        throw createNotImplementedError("process.umask");
      }
      getBuiltinModule() {
        return void 0;
      }
      getActiveResourcesInfo() {
        throw createNotImplementedError("process.getActiveResourcesInfo");
      }
      exit() {
        throw createNotImplementedError("process.exit");
      }
      reallyExit() {
        throw createNotImplementedError("process.reallyExit");
      }
      kill() {
        throw createNotImplementedError("process.kill");
      }
      abort() {
        throw createNotImplementedError("process.abort");
      }
      dlopen() {
        throw createNotImplementedError("process.dlopen");
      }
      setSourceMapsEnabled() {
        throw createNotImplementedError("process.setSourceMapsEnabled");
      }
      loadEnvFile() {
        throw createNotImplementedError("process.loadEnvFile");
      }
      disconnect() {
        throw createNotImplementedError("process.disconnect");
      }
      cpuUsage() {
        throw createNotImplementedError("process.cpuUsage");
      }
      setUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.setUncaughtExceptionCaptureCallback");
      }
      hasUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.hasUncaughtExceptionCaptureCallback");
      }
      initgroups() {
        throw createNotImplementedError("process.initgroups");
      }
      openStdin() {
        throw createNotImplementedError("process.openStdin");
      }
      assert() {
        throw createNotImplementedError("process.assert");
      }
      binding() {
        throw createNotImplementedError("process.binding");
      }
      // --- attached interfaces ---
      permission = { has: /* @__PURE__ */ notImplemented("process.permission.has") };
      report = {
        directory: "",
        filename: "",
        signal: "SIGUSR2",
        compact: false,
        reportOnFatalError: false,
        reportOnSignal: false,
        reportOnUncaughtException: false,
        getReport: /* @__PURE__ */ notImplemented("process.report.getReport"),
        writeReport: /* @__PURE__ */ notImplemented("process.report.writeReport")
      };
      finalization = {
        register: /* @__PURE__ */ notImplemented("process.finalization.register"),
        unregister: /* @__PURE__ */ notImplemented("process.finalization.unregister"),
        registerBeforeExit: /* @__PURE__ */ notImplemented("process.finalization.registerBeforeExit")
      };
      memoryUsage = Object.assign(() => ({
        arrayBuffers: 0,
        rss: 0,
        external: 0,
        heapTotal: 0,
        heapUsed: 0
      }), { rss: /* @__PURE__ */ __name(() => 0, "rss") });
      // --- undefined props ---
      mainModule = void 0;
      domain = void 0;
      // optional
      send = void 0;
      exitCode = void 0;
      channel = void 0;
      getegid = void 0;
      geteuid = void 0;
      getgid = void 0;
      getgroups = void 0;
      getuid = void 0;
      setegid = void 0;
      seteuid = void 0;
      setgid = void 0;
      setgroups = void 0;
      setuid = void 0;
      // internals
      _events = void 0;
      _eventsCount = void 0;
      _exiting = void 0;
      _maxListeners = void 0;
      _debugEnd = void 0;
      _debugProcess = void 0;
      _fatalException = void 0;
      _getActiveHandles = void 0;
      _getActiveRequests = void 0;
      _kill = void 0;
      _preload_modules = void 0;
      _rawDebug = void 0;
      _startProfilerIdleNotifier = void 0;
      _stopProfilerIdleNotifier = void 0;
      _tickCallback = void 0;
      _disconnect = void 0;
      _handleQueue = void 0;
      _pendingMessage = void 0;
      _channel = void 0;
      _send = void 0;
      _linkedBinding = void 0;
    };
  }
});

// ../../../Roaming/npm/node_modules/wrangler/node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs
var globalProcess, getBuiltinModule, workerdProcess, unenvProcess, exit, features, platform, _channel, _debugEnd, _debugProcess, _disconnect, _events, _eventsCount, _exiting, _fatalException, _getActiveHandles, _getActiveRequests, _handleQueue, _kill, _linkedBinding, _maxListeners, _pendingMessage, _preload_modules, _rawDebug, _send, _startProfilerIdleNotifier, _stopProfilerIdleNotifier, _tickCallback, abort, addListener, allowedNodeEnvironmentFlags, arch, argv, argv0, assert2, availableMemory, binding, channel, chdir, config, connected, constrainedMemory, cpuUsage, cwd, debugPort, disconnect, dlopen, domain, emit, emitWarning, env, eventNames, execArgv, execPath, exitCode, finalization, getActiveResourcesInfo, getegid, geteuid, getgid, getgroups, getMaxListeners, getuid, hasUncaughtExceptionCaptureCallback, hrtime3, initgroups, kill, listenerCount, listeners, loadEnvFile, mainModule, memoryUsage, moduleLoadList, nextTick, off, on, once, openStdin, permission, pid, ppid, prependListener, prependOnceListener, rawListeners, reallyExit, ref, release, removeAllListeners, removeListener, report, resourceUsage, send, setegid, seteuid, setgid, setgroups, setMaxListeners, setSourceMapsEnabled, setuid, setUncaughtExceptionCaptureCallback, sourceMapsEnabled, stderr, stdin, stdout, throwDeprecation, title, traceDeprecation, umask, unref, uptime, version, versions, _process, process_default;
var init_process2 = __esm({
  "../../../Roaming/npm/node_modules/wrangler/node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_hrtime();
    init_process();
    globalProcess = globalThis["process"];
    getBuiltinModule = globalProcess.getBuiltinModule;
    workerdProcess = getBuiltinModule("node:process");
    unenvProcess = new Process({
      env: globalProcess.env,
      hrtime,
      // `nextTick` is available from workerd process v1
      nextTick: workerdProcess.nextTick
    });
    ({ exit, features, platform } = workerdProcess);
    ({
      _channel,
      _debugEnd,
      _debugProcess,
      _disconnect,
      _events,
      _eventsCount,
      _exiting,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _handleQueue,
      _kill,
      _linkedBinding,
      _maxListeners,
      _pendingMessage,
      _preload_modules,
      _rawDebug,
      _send,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      arch,
      argv,
      argv0,
      assert: assert2,
      availableMemory,
      binding,
      channel,
      chdir,
      config,
      connected,
      constrainedMemory,
      cpuUsage,
      cwd,
      debugPort,
      disconnect,
      dlopen,
      domain,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      exitCode,
      finalization,
      getActiveResourcesInfo,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getMaxListeners,
      getuid,
      hasUncaughtExceptionCaptureCallback,
      hrtime: hrtime3,
      initgroups,
      kill,
      listenerCount,
      listeners,
      loadEnvFile,
      mainModule,
      memoryUsage,
      moduleLoadList,
      nextTick,
      off,
      on,
      once,
      openStdin,
      permission,
      pid,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      reallyExit,
      ref,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      send,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setMaxListeners,
      setSourceMapsEnabled,
      setuid,
      setUncaughtExceptionCaptureCallback,
      sourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      throwDeprecation,
      title,
      traceDeprecation,
      umask,
      unref,
      uptime,
      version,
      versions
    } = unenvProcess);
    _process = {
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      hasUncaughtExceptionCaptureCallback,
      setUncaughtExceptionCaptureCallback,
      loadEnvFile,
      sourceMapsEnabled,
      arch,
      argv,
      argv0,
      chdir,
      config,
      connected,
      constrainedMemory,
      availableMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      disconnect,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      exit,
      finalization,
      features,
      getBuiltinModule,
      getActiveResourcesInfo,
      getMaxListeners,
      hrtime: hrtime3,
      kill,
      listeners,
      listenerCount,
      memoryUsage,
      nextTick,
      on,
      off,
      once,
      pid,
      platform,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setMaxListeners,
      setSourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      throwDeprecation,
      traceDeprecation,
      umask,
      uptime,
      version,
      versions,
      // @ts-expect-error old API
      domain,
      initgroups,
      moduleLoadList,
      reallyExit,
      openStdin,
      assert: assert2,
      binding,
      send,
      exitCode,
      channel,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      permission,
      mainModule,
      _events,
      _eventsCount,
      _exiting,
      _maxListeners,
      _debugEnd,
      _debugProcess,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      _disconnect,
      _handleQueue,
      _pendingMessage,
      _channel,
      _send,
      _linkedBinding
    };
    process_default = _process;
  }
});

// ../../../Roaming/npm/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process = __esm({
  "../../../Roaming/npm/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process"() {
    init_process2();
    globalThis.process = process_default;
  }
});

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// ../../../Roaming/npm/node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "../../../Roaming/npm/node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// node_modules/emoji-name-map/lib/datasource.json
var require_datasource = __commonJS({
  "node_modules/emoji-name-map/lib/datasource.json"(exports, module) {
    module.exports = { "100": "\u{1F4AF}", "1234": "\u{1F522}", hash: "#\uFE0F\u20E3", keycap_star: "*\uFE0F\u20E3", zero: "0\uFE0F\u20E3", one: "1\uFE0F\u20E3", two: "2\uFE0F\u20E3", three: "3\uFE0F\u20E3", four: "4\uFE0F\u20E3", five: "5\uFE0F\u20E3", six: "6\uFE0F\u20E3", seven: "7\uFE0F\u20E3", eight: "8\uFE0F\u20E3", nine: "9\uFE0F\u20E3", copyright: "\xA9\uFE0F", registered: "\xAE\uFE0F", mahjong: "\u{1F004}", black_joker: "\u{1F0CF}", a: "\u{1F170}\uFE0F", b: "\u{1F171}\uFE0F", o2: "\u{1F17E}\uFE0F", parking: "\u{1F17F}\uFE0F", ab: "\u{1F18E}", cl: "\u{1F191}", cool: "\u{1F192}", free: "\u{1F193}", id: "\u{1F194}", new: "\u{1F195}", ng: "\u{1F196}", ok: "\u{1F197}", sos: "\u{1F198}", up: "\u{1F199}", vs: "\u{1F19A}", "flag-ac": "\u{1F1E6}\u{1F1E8}", "flag-ad": "\u{1F1E6}\u{1F1E9}", "flag-ae": "\u{1F1E6}\u{1F1EA}", "flag-af": "\u{1F1E6}\u{1F1EB}", "flag-ag": "\u{1F1E6}\u{1F1EC}", "flag-ai": "\u{1F1E6}\u{1F1EE}", "flag-al": "\u{1F1E6}\u{1F1F1}", "flag-am": "\u{1F1E6}\u{1F1F2}", "flag-ao": "\u{1F1E6}\u{1F1F4}", "flag-aq": "\u{1F1E6}\u{1F1F6}", "flag-ar": "\u{1F1E6}\u{1F1F7}", "flag-as": "\u{1F1E6}\u{1F1F8}", "flag-at": "\u{1F1E6}\u{1F1F9}", "flag-au": "\u{1F1E6}\u{1F1FA}", "flag-aw": "\u{1F1E6}\u{1F1FC}", "flag-ax": "\u{1F1E6}\u{1F1FD}", "flag-az": "\u{1F1E6}\u{1F1FF}", "flag-ba": "\u{1F1E7}\u{1F1E6}", "flag-bb": "\u{1F1E7}\u{1F1E7}", "flag-bd": "\u{1F1E7}\u{1F1E9}", "flag-be": "\u{1F1E7}\u{1F1EA}", "flag-bf": "\u{1F1E7}\u{1F1EB}", "flag-bg": "\u{1F1E7}\u{1F1EC}", "flag-bh": "\u{1F1E7}\u{1F1ED}", "flag-bi": "\u{1F1E7}\u{1F1EE}", "flag-bj": "\u{1F1E7}\u{1F1EF}", "flag-bl": "\u{1F1E7}\u{1F1F1}", "flag-bm": "\u{1F1E7}\u{1F1F2}", "flag-bn": "\u{1F1E7}\u{1F1F3}", "flag-bo": "\u{1F1E7}\u{1F1F4}", "flag-bq": "\u{1F1E7}\u{1F1F6}", "flag-br": "\u{1F1E7}\u{1F1F7}", "flag-bs": "\u{1F1E7}\u{1F1F8}", "flag-bt": "\u{1F1E7}\u{1F1F9}", "flag-bv": "\u{1F1E7}\u{1F1FB}", "flag-bw": "\u{1F1E7}\u{1F1FC}", "flag-by": "\u{1F1E7}\u{1F1FE}", "flag-bz": "\u{1F1E7}\u{1F1FF}", "flag-ca": "\u{1F1E8}\u{1F1E6}", "flag-cc": "\u{1F1E8}\u{1F1E8}", "flag-cd": "\u{1F1E8}\u{1F1E9}", "flag-cf": "\u{1F1E8}\u{1F1EB}", "flag-cg": "\u{1F1E8}\u{1F1EC}", "flag-ch": "\u{1F1E8}\u{1F1ED}", "flag-ci": "\u{1F1E8}\u{1F1EE}", "flag-ck": "\u{1F1E8}\u{1F1F0}", "flag-cl": "\u{1F1E8}\u{1F1F1}", "flag-cm": "\u{1F1E8}\u{1F1F2}", cn: "\u{1F1E8}\u{1F1F3}", "flag-co": "\u{1F1E8}\u{1F1F4}", "flag-cp": "\u{1F1E8}\u{1F1F5}", "flag-cr": "\u{1F1E8}\u{1F1F7}", "flag-cu": "\u{1F1E8}\u{1F1FA}", "flag-cv": "\u{1F1E8}\u{1F1FB}", "flag-cw": "\u{1F1E8}\u{1F1FC}", "flag-cx": "\u{1F1E8}\u{1F1FD}", "flag-cy": "\u{1F1E8}\u{1F1FE}", "flag-cz": "\u{1F1E8}\u{1F1FF}", de: "\u{1F1E9}\u{1F1EA}", "flag-dg": "\u{1F1E9}\u{1F1EC}", "flag-dj": "\u{1F1E9}\u{1F1EF}", "flag-dk": "\u{1F1E9}\u{1F1F0}", "flag-dm": "\u{1F1E9}\u{1F1F2}", "flag-do": "\u{1F1E9}\u{1F1F4}", "flag-dz": "\u{1F1E9}\u{1F1FF}", "flag-ea": "\u{1F1EA}\u{1F1E6}", "flag-ec": "\u{1F1EA}\u{1F1E8}", "flag-ee": "\u{1F1EA}\u{1F1EA}", "flag-eg": "\u{1F1EA}\u{1F1EC}", "flag-eh": "\u{1F1EA}\u{1F1ED}", "flag-er": "\u{1F1EA}\u{1F1F7}", es: "\u{1F1EA}\u{1F1F8}", "flag-et": "\u{1F1EA}\u{1F1F9}", "flag-eu": "\u{1F1EA}\u{1F1FA}", "flag-fi": "\u{1F1EB}\u{1F1EE}", "flag-fj": "\u{1F1EB}\u{1F1EF}", "flag-fk": "\u{1F1EB}\u{1F1F0}", "flag-fm": "\u{1F1EB}\u{1F1F2}", "flag-fo": "\u{1F1EB}\u{1F1F4}", fr: "\u{1F1EB}\u{1F1F7}", "flag-ga": "\u{1F1EC}\u{1F1E6}", gb: "\u{1F1EC}\u{1F1E7}", "flag-gd": "\u{1F1EC}\u{1F1E9}", "flag-ge": "\u{1F1EC}\u{1F1EA}", "flag-gf": "\u{1F1EC}\u{1F1EB}", "flag-gg": "\u{1F1EC}\u{1F1EC}", "flag-gh": "\u{1F1EC}\u{1F1ED}", "flag-gi": "\u{1F1EC}\u{1F1EE}", "flag-gl": "\u{1F1EC}\u{1F1F1}", "flag-gm": "\u{1F1EC}\u{1F1F2}", "flag-gn": "\u{1F1EC}\u{1F1F3}", "flag-gp": "\u{1F1EC}\u{1F1F5}", "flag-gq": "\u{1F1EC}\u{1F1F6}", "flag-gr": "\u{1F1EC}\u{1F1F7}", "flag-gs": "\u{1F1EC}\u{1F1F8}", "flag-gt": "\u{1F1EC}\u{1F1F9}", "flag-gu": "\u{1F1EC}\u{1F1FA}", "flag-gw": "\u{1F1EC}\u{1F1FC}", "flag-gy": "\u{1F1EC}\u{1F1FE}", "flag-hk": "\u{1F1ED}\u{1F1F0}", "flag-hm": "\u{1F1ED}\u{1F1F2}", "flag-hn": "\u{1F1ED}\u{1F1F3}", "flag-hr": "\u{1F1ED}\u{1F1F7}", "flag-ht": "\u{1F1ED}\u{1F1F9}", "flag-hu": "\u{1F1ED}\u{1F1FA}", "flag-ic": "\u{1F1EE}\u{1F1E8}", "flag-id": "\u{1F1EE}\u{1F1E9}", "flag-ie": "\u{1F1EE}\u{1F1EA}", "flag-il": "\u{1F1EE}\u{1F1F1}", "flag-im": "\u{1F1EE}\u{1F1F2}", "flag-in": "\u{1F1EE}\u{1F1F3}", "flag-io": "\u{1F1EE}\u{1F1F4}", "flag-iq": "\u{1F1EE}\u{1F1F6}", "flag-ir": "\u{1F1EE}\u{1F1F7}", "flag-is": "\u{1F1EE}\u{1F1F8}", it: "\u{1F1EE}\u{1F1F9}", "flag-je": "\u{1F1EF}\u{1F1EA}", "flag-jm": "\u{1F1EF}\u{1F1F2}", "flag-jo": "\u{1F1EF}\u{1F1F4}", jp: "\u{1F1EF}\u{1F1F5}", "flag-ke": "\u{1F1F0}\u{1F1EA}", "flag-kg": "\u{1F1F0}\u{1F1EC}", "flag-kh": "\u{1F1F0}\u{1F1ED}", "flag-ki": "\u{1F1F0}\u{1F1EE}", "flag-km": "\u{1F1F0}\u{1F1F2}", "flag-kn": "\u{1F1F0}\u{1F1F3}", "flag-kp": "\u{1F1F0}\u{1F1F5}", kr: "\u{1F1F0}\u{1F1F7}", "flag-kw": "\u{1F1F0}\u{1F1FC}", "flag-ky": "\u{1F1F0}\u{1F1FE}", "flag-kz": "\u{1F1F0}\u{1F1FF}", "flag-la": "\u{1F1F1}\u{1F1E6}", "flag-lb": "\u{1F1F1}\u{1F1E7}", "flag-lc": "\u{1F1F1}\u{1F1E8}", "flag-li": "\u{1F1F1}\u{1F1EE}", "flag-lk": "\u{1F1F1}\u{1F1F0}", "flag-lr": "\u{1F1F1}\u{1F1F7}", "flag-ls": "\u{1F1F1}\u{1F1F8}", "flag-lt": "\u{1F1F1}\u{1F1F9}", "flag-lu": "\u{1F1F1}\u{1F1FA}", "flag-lv": "\u{1F1F1}\u{1F1FB}", "flag-ly": "\u{1F1F1}\u{1F1FE}", "flag-ma": "\u{1F1F2}\u{1F1E6}", "flag-mc": "\u{1F1F2}\u{1F1E8}", "flag-md": "\u{1F1F2}\u{1F1E9}", "flag-me": "\u{1F1F2}\u{1F1EA}", "flag-mf": "\u{1F1F2}\u{1F1EB}", "flag-mg": "\u{1F1F2}\u{1F1EC}", "flag-mh": "\u{1F1F2}\u{1F1ED}", "flag-mk": "\u{1F1F2}\u{1F1F0}", "flag-ml": "\u{1F1F2}\u{1F1F1}", "flag-mm": "\u{1F1F2}\u{1F1F2}", "flag-mn": "\u{1F1F2}\u{1F1F3}", "flag-mo": "\u{1F1F2}\u{1F1F4}", "flag-mp": "\u{1F1F2}\u{1F1F5}", "flag-mq": "\u{1F1F2}\u{1F1F6}", "flag-mr": "\u{1F1F2}\u{1F1F7}", "flag-ms": "\u{1F1F2}\u{1F1F8}", "flag-mt": "\u{1F1F2}\u{1F1F9}", "flag-mu": "\u{1F1F2}\u{1F1FA}", "flag-mv": "\u{1F1F2}\u{1F1FB}", "flag-mw": "\u{1F1F2}\u{1F1FC}", "flag-mx": "\u{1F1F2}\u{1F1FD}", "flag-my": "\u{1F1F2}\u{1F1FE}", "flag-mz": "\u{1F1F2}\u{1F1FF}", "flag-na": "\u{1F1F3}\u{1F1E6}", "flag-nc": "\u{1F1F3}\u{1F1E8}", "flag-ne": "\u{1F1F3}\u{1F1EA}", "flag-nf": "\u{1F1F3}\u{1F1EB}", "flag-ng": "\u{1F1F3}\u{1F1EC}", "flag-ni": "\u{1F1F3}\u{1F1EE}", "flag-nl": "\u{1F1F3}\u{1F1F1}", "flag-no": "\u{1F1F3}\u{1F1F4}", "flag-np": "\u{1F1F3}\u{1F1F5}", "flag-nr": "\u{1F1F3}\u{1F1F7}", "flag-nu": "\u{1F1F3}\u{1F1FA}", "flag-nz": "\u{1F1F3}\u{1F1FF}", "flag-om": "\u{1F1F4}\u{1F1F2}", "flag-pa": "\u{1F1F5}\u{1F1E6}", "flag-pe": "\u{1F1F5}\u{1F1EA}", "flag-pf": "\u{1F1F5}\u{1F1EB}", "flag-pg": "\u{1F1F5}\u{1F1EC}", "flag-ph": "\u{1F1F5}\u{1F1ED}", "flag-pk": "\u{1F1F5}\u{1F1F0}", "flag-pl": "\u{1F1F5}\u{1F1F1}", "flag-pm": "\u{1F1F5}\u{1F1F2}", "flag-pn": "\u{1F1F5}\u{1F1F3}", "flag-pr": "\u{1F1F5}\u{1F1F7}", "flag-ps": "\u{1F1F5}\u{1F1F8}", "flag-pt": "\u{1F1F5}\u{1F1F9}", "flag-pw": "\u{1F1F5}\u{1F1FC}", "flag-py": "\u{1F1F5}\u{1F1FE}", "flag-qa": "\u{1F1F6}\u{1F1E6}", "flag-re": "\u{1F1F7}\u{1F1EA}", "flag-ro": "\u{1F1F7}\u{1F1F4}", "flag-rs": "\u{1F1F7}\u{1F1F8}", ru: "\u{1F1F7}\u{1F1FA}", "flag-rw": "\u{1F1F7}\u{1F1FC}", "flag-sa": "\u{1F1F8}\u{1F1E6}", "flag-sb": "\u{1F1F8}\u{1F1E7}", "flag-sc": "\u{1F1F8}\u{1F1E8}", "flag-sd": "\u{1F1F8}\u{1F1E9}", "flag-se": "\u{1F1F8}\u{1F1EA}", "flag-sg": "\u{1F1F8}\u{1F1EC}", "flag-sh": "\u{1F1F8}\u{1F1ED}", "flag-si": "\u{1F1F8}\u{1F1EE}", "flag-sj": "\u{1F1F8}\u{1F1EF}", "flag-sk": "\u{1F1F8}\u{1F1F0}", "flag-sl": "\u{1F1F8}\u{1F1F1}", "flag-sm": "\u{1F1F8}\u{1F1F2}", "flag-sn": "\u{1F1F8}\u{1F1F3}", "flag-so": "\u{1F1F8}\u{1F1F4}", "flag-sr": "\u{1F1F8}\u{1F1F7}", "flag-ss": "\u{1F1F8}\u{1F1F8}", "flag-st": "\u{1F1F8}\u{1F1F9}", "flag-sv": "\u{1F1F8}\u{1F1FB}", "flag-sx": "\u{1F1F8}\u{1F1FD}", "flag-sy": "\u{1F1F8}\u{1F1FE}", "flag-sz": "\u{1F1F8}\u{1F1FF}", "flag-ta": "\u{1F1F9}\u{1F1E6}", "flag-tc": "\u{1F1F9}\u{1F1E8}", "flag-td": "\u{1F1F9}\u{1F1E9}", "flag-tf": "\u{1F1F9}\u{1F1EB}", "flag-tg": "\u{1F1F9}\u{1F1EC}", "flag-th": "\u{1F1F9}\u{1F1ED}", "flag-tj": "\u{1F1F9}\u{1F1EF}", "flag-tk": "\u{1F1F9}\u{1F1F0}", "flag-tl": "\u{1F1F9}\u{1F1F1}", "flag-tm": "\u{1F1F9}\u{1F1F2}", "flag-tn": "\u{1F1F9}\u{1F1F3}", "flag-to": "\u{1F1F9}\u{1F1F4}", "flag-tr": "\u{1F1F9}\u{1F1F7}", "flag-tt": "\u{1F1F9}\u{1F1F9}", "flag-tv": "\u{1F1F9}\u{1F1FB}", "flag-tw": "\u{1F1F9}\u{1F1FC}", "flag-tz": "\u{1F1F9}\u{1F1FF}", "flag-ua": "\u{1F1FA}\u{1F1E6}", "flag-ug": "\u{1F1FA}\u{1F1EC}", "flag-um": "\u{1F1FA}\u{1F1F2}", "flag-un": "\u{1F1FA}\u{1F1F3}", us: "\u{1F1FA}\u{1F1F8}", "flag-uy": "\u{1F1FA}\u{1F1FE}", "flag-uz": "\u{1F1FA}\u{1F1FF}", "flag-va": "\u{1F1FB}\u{1F1E6}", "flag-vc": "\u{1F1FB}\u{1F1E8}", "flag-ve": "\u{1F1FB}\u{1F1EA}", "flag-vg": "\u{1F1FB}\u{1F1EC}", "flag-vi": "\u{1F1FB}\u{1F1EE}", "flag-vn": "\u{1F1FB}\u{1F1F3}", "flag-vu": "\u{1F1FB}\u{1F1FA}", "flag-wf": "\u{1F1FC}\u{1F1EB}", "flag-ws": "\u{1F1FC}\u{1F1F8}", "flag-xk": "\u{1F1FD}\u{1F1F0}", "flag-ye": "\u{1F1FE}\u{1F1EA}", "flag-yt": "\u{1F1FE}\u{1F1F9}", "flag-za": "\u{1F1FF}\u{1F1E6}", "flag-zm": "\u{1F1FF}\u{1F1F2}", "flag-zw": "\u{1F1FF}\u{1F1FC}", koko: "\u{1F201}", sa: "\u{1F202}\uFE0F", u7121: "\u{1F21A}", u6307: "\u{1F22F}", u7981: "\u{1F232}", u7a7a: "\u{1F233}", u5408: "\u{1F234}", u6e80: "\u{1F235}", u6709: "\u{1F236}", u6708: "\u{1F237}\uFE0F", u7533: "\u{1F238}", u5272: "\u{1F239}", u55b6: "\u{1F23A}", ideograph_advantage: "\u{1F250}", accept: "\u{1F251}", cyclone: "\u{1F300}", foggy: "\u{1F301}", closed_umbrella: "\u{1F302}", night_with_stars: "\u{1F303}", sunrise_over_mountains: "\u{1F304}", sunrise: "\u{1F305}", city_sunset: "\u{1F306}", city_sunrise: "\u{1F307}", rainbow: "\u{1F308}", bridge_at_night: "\u{1F309}", ocean: "\u{1F30A}", volcano: "\u{1F30B}", milky_way: "\u{1F30C}", earth_africa: "\u{1F30D}", earth_americas: "\u{1F30E}", earth_asia: "\u{1F30F}", globe_with_meridians: "\u{1F310}", new_moon: "\u{1F311}", waxing_crescent_moon: "\u{1F312}", first_quarter_moon: "\u{1F313}", moon: "\u{1F314}", full_moon: "\u{1F315}", waning_gibbous_moon: "\u{1F316}", last_quarter_moon: "\u{1F317}", waning_crescent_moon: "\u{1F318}", crescent_moon: "\u{1F319}", new_moon_with_face: "\u{1F31A}", first_quarter_moon_with_face: "\u{1F31B}", last_quarter_moon_with_face: "\u{1F31C}", full_moon_with_face: "\u{1F31D}", sun_with_face: "\u{1F31E}", star2: "\u{1F31F}", stars: "\u{1F320}", thermometer: "\u{1F321}\uFE0F", mostly_sunny: "\u{1F324}\uFE0F", barely_sunny: "\u{1F325}\uFE0F", partly_sunny_rain: "\u{1F326}\uFE0F", rain_cloud: "\u{1F327}\uFE0F", snow_cloud: "\u{1F328}\uFE0F", lightning: "\u{1F329}\uFE0F", tornado: "\u{1F32A}\uFE0F", fog: "\u{1F32B}\uFE0F", wind_blowing_face: "\u{1F32C}\uFE0F", hotdog: "\u{1F32D}", taco: "\u{1F32E}", burrito: "\u{1F32F}", chestnut: "\u{1F330}", seedling: "\u{1F331}", evergreen_tree: "\u{1F332}", deciduous_tree: "\u{1F333}", palm_tree: "\u{1F334}", cactus: "\u{1F335}", hot_pepper: "\u{1F336}\uFE0F", tulip: "\u{1F337}", cherry_blossom: "\u{1F338}", rose: "\u{1F339}", hibiscus: "\u{1F33A}", sunflower: "\u{1F33B}", blossom: "\u{1F33C}", corn: "\u{1F33D}", ear_of_rice: "\u{1F33E}", herb: "\u{1F33F}", four_leaf_clover: "\u{1F340}", maple_leaf: "\u{1F341}", fallen_leaf: "\u{1F342}", leaves: "\u{1F343}", mushroom: "\u{1F344}", tomato: "\u{1F345}", eggplant: "\u{1F346}", grapes: "\u{1F347}", melon: "\u{1F348}", watermelon: "\u{1F349}", tangerine: "\u{1F34A}", lemon: "\u{1F34B}", banana: "\u{1F34C}", pineapple: "\u{1F34D}", apple: "\u{1F34E}", green_apple: "\u{1F34F}", pear: "\u{1F350}", peach: "\u{1F351}", cherries: "\u{1F352}", strawberry: "\u{1F353}", hamburger: "\u{1F354}", pizza: "\u{1F355}", meat_on_bone: "\u{1F356}", poultry_leg: "\u{1F357}", rice_cracker: "\u{1F358}", rice_ball: "\u{1F359}", rice: "\u{1F35A}", curry: "\u{1F35B}", ramen: "\u{1F35C}", spaghetti: "\u{1F35D}", bread: "\u{1F35E}", fries: "\u{1F35F}", sweet_potato: "\u{1F360}", dango: "\u{1F361}", oden: "\u{1F362}", sushi: "\u{1F363}", fried_shrimp: "\u{1F364}", fish_cake: "\u{1F365}", icecream: "\u{1F366}", shaved_ice: "\u{1F367}", ice_cream: "\u{1F368}", doughnut: "\u{1F369}", cookie: "\u{1F36A}", chocolate_bar: "\u{1F36B}", candy: "\u{1F36C}", lollipop: "\u{1F36D}", custard: "\u{1F36E}", honey_pot: "\u{1F36F}", cake: "\u{1F370}", bento: "\u{1F371}", stew: "\u{1F372}", fried_egg: "\u{1F373}", fork_and_knife: "\u{1F374}", tea: "\u{1F375}", sake: "\u{1F376}", wine_glass: "\u{1F377}", cocktail: "\u{1F378}", tropical_drink: "\u{1F379}", beer: "\u{1F37A}", beers: "\u{1F37B}", baby_bottle: "\u{1F37C}", knife_fork_plate: "\u{1F37D}\uFE0F", champagne: "\u{1F37E}", popcorn: "\u{1F37F}", ribbon: "\u{1F380}", gift: "\u{1F381}", birthday: "\u{1F382}", jack_o_lantern: "\u{1F383}", christmas_tree: "\u{1F384}", santa: "\u{1F385}", fireworks: "\u{1F386}", sparkler: "\u{1F387}", balloon: "\u{1F388}", tada: "\u{1F389}", confetti_ball: "\u{1F38A}", tanabata_tree: "\u{1F38B}", crossed_flags: "\u{1F38C}", bamboo: "\u{1F38D}", dolls: "\u{1F38E}", flags: "\u{1F38F}", wind_chime: "\u{1F390}", rice_scene: "\u{1F391}", school_satchel: "\u{1F392}", mortar_board: "\u{1F393}", medal: "\u{1F396}\uFE0F", reminder_ribbon: "\u{1F397}\uFE0F", studio_microphone: "\u{1F399}\uFE0F", level_slider: "\u{1F39A}\uFE0F", control_knobs: "\u{1F39B}\uFE0F", film_frames: "\u{1F39E}\uFE0F", admission_tickets: "\u{1F39F}\uFE0F", carousel_horse: "\u{1F3A0}", ferris_wheel: "\u{1F3A1}", roller_coaster: "\u{1F3A2}", fishing_pole_and_fish: "\u{1F3A3}", microphone: "\u{1F3A4}", movie_camera: "\u{1F3A5}", cinema: "\u{1F3A6}", headphones: "\u{1F3A7}", art: "\u{1F3A8}", tophat: "\u{1F3A9}", circus_tent: "\u{1F3AA}", ticket: "\u{1F3AB}", clapper: "\u{1F3AC}", performing_arts: "\u{1F3AD}", video_game: "\u{1F3AE}", dart: "\u{1F3AF}", slot_machine: "\u{1F3B0}", "8ball": "\u{1F3B1}", game_die: "\u{1F3B2}", bowling: "\u{1F3B3}", flower_playing_cards: "\u{1F3B4}", musical_note: "\u{1F3B5}", notes: "\u{1F3B6}", saxophone: "\u{1F3B7}", guitar: "\u{1F3B8}", musical_keyboard: "\u{1F3B9}", trumpet: "\u{1F3BA}", violin: "\u{1F3BB}", musical_score: "\u{1F3BC}", running_shirt_with_sash: "\u{1F3BD}", tennis: "\u{1F3BE}", ski: "\u{1F3BF}", basketball: "\u{1F3C0}", checkered_flag: "\u{1F3C1}", snowboarder: "\u{1F3C2}", "woman-running": "\u{1F3C3}\u200D\u2640\uFE0F", "man-running": "\u{1F3C3}\u200D\u2642\uFE0F", runner: "\u{1F3C3}", "woman-surfing": "\u{1F3C4}\u200D\u2640\uFE0F", "man-surfing": "\u{1F3C4}\u200D\u2642\uFE0F", surfer: "\u{1F3C4}", sports_medal: "\u{1F3C5}", trophy: "\u{1F3C6}", horse_racing: "\u{1F3C7}", football: "\u{1F3C8}", rugby_football: "\u{1F3C9}", "woman-swimming": "\u{1F3CA}\u200D\u2640\uFE0F", "man-swimming": "\u{1F3CA}\u200D\u2642\uFE0F", swimmer: "\u{1F3CA}", "woman-lifting-weights": "\u{1F3CB}\uFE0F\u200D\u2640\uFE0F", "man-lifting-weights": "\u{1F3CB}\uFE0F\u200D\u2642\uFE0F", weight_lifter: "\u{1F3CB}\uFE0F", "woman-golfing": "\u{1F3CC}\uFE0F\u200D\u2640\uFE0F", "man-golfing": "\u{1F3CC}\uFE0F\u200D\u2642\uFE0F", golfer: "\u{1F3CC}\uFE0F", racing_motorcycle: "\u{1F3CD}\uFE0F", racing_car: "\u{1F3CE}\uFE0F", cricket_bat_and_ball: "\u{1F3CF}", volleyball: "\u{1F3D0}", field_hockey_stick_and_ball: "\u{1F3D1}", ice_hockey_stick_and_puck: "\u{1F3D2}", table_tennis_paddle_and_ball: "\u{1F3D3}", snow_capped_mountain: "\u{1F3D4}\uFE0F", camping: "\u{1F3D5}\uFE0F", beach_with_umbrella: "\u{1F3D6}\uFE0F", building_construction: "\u{1F3D7}\uFE0F", house_buildings: "\u{1F3D8}\uFE0F", cityscape: "\u{1F3D9}\uFE0F", derelict_house_building: "\u{1F3DA}\uFE0F", classical_building: "\u{1F3DB}\uFE0F", desert: "\u{1F3DC}\uFE0F", desert_island: "\u{1F3DD}\uFE0F", national_park: "\u{1F3DE}\uFE0F", stadium: "\u{1F3DF}\uFE0F", house: "\u{1F3E0}", house_with_garden: "\u{1F3E1}", office: "\u{1F3E2}", post_office: "\u{1F3E3}", european_post_office: "\u{1F3E4}", hospital: "\u{1F3E5}", bank: "\u{1F3E6}", atm: "\u{1F3E7}", hotel: "\u{1F3E8}", love_hotel: "\u{1F3E9}", convenience_store: "\u{1F3EA}", school: "\u{1F3EB}", department_store: "\u{1F3EC}", factory: "\u{1F3ED}", izakaya_lantern: "\u{1F3EE}", japanese_castle: "\u{1F3EF}", european_castle: "\u{1F3F0}", "rainbow-flag": "\u{1F3F3}\uFE0F\u200D\u{1F308}", transgender_flag: "\u{1F3F3}\uFE0F\u200D\u26A7\uFE0F", waving_white_flag: "\u{1F3F3}\uFE0F", pirate_flag: "\u{1F3F4}\u200D\u2620\uFE0F", "flag-england": "\u{1F3F4}\u{E0067}\u{E0062}\u{E0065}\u{E006E}\u{E0067}\u{E007F}", "flag-scotland": "\u{1F3F4}\u{E0067}\u{E0062}\u{E0073}\u{E0063}\u{E0074}\u{E007F}", "flag-wales": "\u{1F3F4}\u{E0067}\u{E0062}\u{E0077}\u{E006C}\u{E0073}\u{E007F}", waving_black_flag: "\u{1F3F4}", rosette: "\u{1F3F5}\uFE0F", label: "\u{1F3F7}\uFE0F", badminton_racquet_and_shuttlecock: "\u{1F3F8}", bow_and_arrow: "\u{1F3F9}", amphora: "\u{1F3FA}", "skin-tone-2": "\u{1F3FB}", "skin-tone-3": "\u{1F3FC}", "skin-tone-4": "\u{1F3FD}", "skin-tone-5": "\u{1F3FE}", "skin-tone-6": "\u{1F3FF}", rat: "\u{1F400}", mouse2: "\u{1F401}", ox: "\u{1F402}", water_buffalo: "\u{1F403}", cow2: "\u{1F404}", tiger2: "\u{1F405}", leopard: "\u{1F406}", rabbit2: "\u{1F407}", black_cat: "\u{1F408}\u200D\u2B1B", cat2: "\u{1F408}", dragon: "\u{1F409}", crocodile: "\u{1F40A}", whale2: "\u{1F40B}", snail: "\u{1F40C}", snake: "\u{1F40D}", racehorse: "\u{1F40E}", ram: "\u{1F40F}", goat: "\u{1F410}", sheep: "\u{1F411}", monkey: "\u{1F412}", rooster: "\u{1F413}", chicken: "\u{1F414}", service_dog: "\u{1F415}\u200D\u{1F9BA}", dog2: "\u{1F415}", pig2: "\u{1F416}", boar: "\u{1F417}", elephant: "\u{1F418}", octopus: "\u{1F419}", shell: "\u{1F41A}", bug: "\u{1F41B}", ant: "\u{1F41C}", bee: "\u{1F41D}", ladybug: "\u{1F41E}", fish: "\u{1F41F}", tropical_fish: "\u{1F420}", blowfish: "\u{1F421}", turtle: "\u{1F422}", hatching_chick: "\u{1F423}", baby_chick: "\u{1F424}", hatched_chick: "\u{1F425}", bird: "\u{1F426}", penguin: "\u{1F427}", koala: "\u{1F428}", poodle: "\u{1F429}", dromedary_camel: "\u{1F42A}", camel: "\u{1F42B}", dolphin: "\u{1F42C}", mouse: "\u{1F42D}", cow: "\u{1F42E}", tiger: "\u{1F42F}", rabbit: "\u{1F430}", cat: "\u{1F431}", dragon_face: "\u{1F432}", whale: "\u{1F433}", horse: "\u{1F434}", monkey_face: "\u{1F435}", dog: "\u{1F436}", pig: "\u{1F437}", frog: "\u{1F438}", hamster: "\u{1F439}", wolf: "\u{1F43A}", polar_bear: "\u{1F43B}\u200D\u2744\uFE0F", bear: "\u{1F43B}", panda_face: "\u{1F43C}", pig_nose: "\u{1F43D}", feet: "\u{1F43E}", chipmunk: "\u{1F43F}\uFE0F", eyes: "\u{1F440}", "eye-in-speech-bubble": "\u{1F441}\uFE0F\u200D\u{1F5E8}\uFE0F", eye: "\u{1F441}\uFE0F", ear: "\u{1F442}", nose: "\u{1F443}", lips: "\u{1F444}", tongue: "\u{1F445}", point_up_2: "\u{1F446}", point_down: "\u{1F447}", point_left: "\u{1F448}", point_right: "\u{1F449}", facepunch: "\u{1F44A}", wave: "\u{1F44B}", ok_hand: "\u{1F44C}", "+1": "\u{1F44D}", "-1": "\u{1F44E}", clap: "\u{1F44F}", open_hands: "\u{1F450}", crown: "\u{1F451}", womans_hat: "\u{1F452}", eyeglasses: "\u{1F453}", necktie: "\u{1F454}", shirt: "\u{1F455}", jeans: "\u{1F456}", dress: "\u{1F457}", kimono: "\u{1F458}", bikini: "\u{1F459}", womans_clothes: "\u{1F45A}", purse: "\u{1F45B}", handbag: "\u{1F45C}", pouch: "\u{1F45D}", mans_shoe: "\u{1F45E}", athletic_shoe: "\u{1F45F}", high_heel: "\u{1F460}", sandal: "\u{1F461}", boot: "\u{1F462}", footprints: "\u{1F463}", bust_in_silhouette: "\u{1F464}", busts_in_silhouette: "\u{1F465}", boy: "\u{1F466}", girl: "\u{1F467}", "male-farmer": "\u{1F468}\u200D\u{1F33E}", "male-cook": "\u{1F468}\u200D\u{1F373}", man_feeding_baby: "\u{1F468}\u200D\u{1F37C}", "male-student": "\u{1F468}\u200D\u{1F393}", "male-singer": "\u{1F468}\u200D\u{1F3A4}", "male-artist": "\u{1F468}\u200D\u{1F3A8}", "male-teacher": "\u{1F468}\u200D\u{1F3EB}", "male-factory-worker": "\u{1F468}\u200D\u{1F3ED}", "man-boy-boy": "\u{1F468}\u200D\u{1F466}\u200D\u{1F466}", "man-boy": "\u{1F468}\u200D\u{1F466}", "man-girl-boy": "\u{1F468}\u200D\u{1F467}\u200D\u{1F466}", "man-girl-girl": "\u{1F468}\u200D\u{1F467}\u200D\u{1F467}", "man-girl": "\u{1F468}\u200D\u{1F467}", "man-man-boy": "\u{1F468}\u200D\u{1F468}\u200D\u{1F466}", "man-man-boy-boy": "\u{1F468}\u200D\u{1F468}\u200D\u{1F466}\u200D\u{1F466}", "man-man-girl": "\u{1F468}\u200D\u{1F468}\u200D\u{1F467}", "man-man-girl-boy": "\u{1F468}\u200D\u{1F468}\u200D\u{1F467}\u200D\u{1F466}", "man-man-girl-girl": "\u{1F468}\u200D\u{1F468}\u200D\u{1F467}\u200D\u{1F467}", "man-woman-boy": "\u{1F468}\u200D\u{1F469}\u200D\u{1F466}", "man-woman-boy-boy": "\u{1F468}\u200D\u{1F469}\u200D\u{1F466}\u200D\u{1F466}", "man-woman-girl": "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}", "man-woman-girl-boy": "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}", "man-woman-girl-girl": "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467}", "male-technologist": "\u{1F468}\u200D\u{1F4BB}", "male-office-worker": "\u{1F468}\u200D\u{1F4BC}", "male-mechanic": "\u{1F468}\u200D\u{1F527}", "male-scientist": "\u{1F468}\u200D\u{1F52C}", "male-astronaut": "\u{1F468}\u200D\u{1F680}", "male-firefighter": "\u{1F468}\u200D\u{1F692}", man_with_probing_cane: "\u{1F468}\u200D\u{1F9AF}", red_haired_man: "\u{1F468}\u200D\u{1F9B0}", curly_haired_man: "\u{1F468}\u200D\u{1F9B1}", bald_man: "\u{1F468}\u200D\u{1F9B2}", white_haired_man: "\u{1F468}\u200D\u{1F9B3}", man_in_motorized_wheelchair: "\u{1F468}\u200D\u{1F9BC}", man_in_manual_wheelchair: "\u{1F468}\u200D\u{1F9BD}", "male-doctor": "\u{1F468}\u200D\u2695\uFE0F", "male-judge": "\u{1F468}\u200D\u2696\uFE0F", "male-pilot": "\u{1F468}\u200D\u2708\uFE0F", "man-heart-man": "\u{1F468}\u200D\u2764\uFE0F\u200D\u{1F468}", "man-kiss-man": "\u{1F468}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}", man: "\u{1F468}", "female-farmer": "\u{1F469}\u200D\u{1F33E}", "female-cook": "\u{1F469}\u200D\u{1F373}", woman_feeding_baby: "\u{1F469}\u200D\u{1F37C}", "female-student": "\u{1F469}\u200D\u{1F393}", "female-singer": "\u{1F469}\u200D\u{1F3A4}", "female-artist": "\u{1F469}\u200D\u{1F3A8}", "female-teacher": "\u{1F469}\u200D\u{1F3EB}", "female-factory-worker": "\u{1F469}\u200D\u{1F3ED}", "woman-boy-boy": "\u{1F469}\u200D\u{1F466}\u200D\u{1F466}", "woman-boy": "\u{1F469}\u200D\u{1F466}", "woman-girl-boy": "\u{1F469}\u200D\u{1F467}\u200D\u{1F466}", "woman-girl-girl": "\u{1F469}\u200D\u{1F467}\u200D\u{1F467}", "woman-girl": "\u{1F469}\u200D\u{1F467}", "woman-woman-boy": "\u{1F469}\u200D\u{1F469}\u200D\u{1F466}", "woman-woman-boy-boy": "\u{1F469}\u200D\u{1F469}\u200D\u{1F466}\u200D\u{1F466}", "woman-woman-girl": "\u{1F469}\u200D\u{1F469}\u200D\u{1F467}", "woman-woman-girl-boy": "\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}", "woman-woman-girl-girl": "\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467}", "female-technologist": "\u{1F469}\u200D\u{1F4BB}", "female-office-worker": "\u{1F469}\u200D\u{1F4BC}", "female-mechanic": "\u{1F469}\u200D\u{1F527}", "female-scientist": "\u{1F469}\u200D\u{1F52C}", "female-astronaut": "\u{1F469}\u200D\u{1F680}", "female-firefighter": "\u{1F469}\u200D\u{1F692}", woman_with_probing_cane: "\u{1F469}\u200D\u{1F9AF}", red_haired_woman: "\u{1F469}\u200D\u{1F9B0}", curly_haired_woman: "\u{1F469}\u200D\u{1F9B1}", bald_woman: "\u{1F469}\u200D\u{1F9B2}", white_haired_woman: "\u{1F469}\u200D\u{1F9B3}", woman_in_motorized_wheelchair: "\u{1F469}\u200D\u{1F9BC}", woman_in_manual_wheelchair: "\u{1F469}\u200D\u{1F9BD}", "female-doctor": "\u{1F469}\u200D\u2695\uFE0F", "female-judge": "\u{1F469}\u200D\u2696\uFE0F", "female-pilot": "\u{1F469}\u200D\u2708\uFE0F", "woman-heart-man": "\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F468}", "woman-heart-woman": "\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F469}", "woman-kiss-man": "\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}", "woman-kiss-woman": "\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}", woman: "\u{1F469}", family: "\u{1F46A}", man_and_woman_holding_hands: "\u{1F46B}", two_men_holding_hands: "\u{1F46C}", two_women_holding_hands: "\u{1F46D}", "female-police-officer": "\u{1F46E}\u200D\u2640\uFE0F", "male-police-officer": "\u{1F46E}\u200D\u2642\uFE0F", cop: "\u{1F46E}", "women-with-bunny-ears-partying": "\u{1F46F}\u200D\u2640\uFE0F", "men-with-bunny-ears-partying": "\u{1F46F}\u200D\u2642\uFE0F", dancers: "\u{1F46F}", woman_with_veil: "\u{1F470}\u200D\u2640\uFE0F", man_with_veil: "\u{1F470}\u200D\u2642\uFE0F", bride_with_veil: "\u{1F470}", "blond-haired-woman": "\u{1F471}\u200D\u2640\uFE0F", "blond-haired-man": "\u{1F471}\u200D\u2642\uFE0F", person_with_blond_hair: "\u{1F471}", man_with_gua_pi_mao: "\u{1F472}", "woman-wearing-turban": "\u{1F473}\u200D\u2640\uFE0F", "man-wearing-turban": "\u{1F473}\u200D\u2642\uFE0F", man_with_turban: "\u{1F473}", older_man: "\u{1F474}", older_woman: "\u{1F475}", baby: "\u{1F476}", "female-construction-worker": "\u{1F477}\u200D\u2640\uFE0F", "male-construction-worker": "\u{1F477}\u200D\u2642\uFE0F", construction_worker: "\u{1F477}", princess: "\u{1F478}", japanese_ogre: "\u{1F479}", japanese_goblin: "\u{1F47A}", ghost: "\u{1F47B}", angel: "\u{1F47C}", alien: "\u{1F47D}", space_invader: "\u{1F47E}", imp: "\u{1F47F}", skull: "\u{1F480}", "woman-tipping-hand": "\u{1F481}\u200D\u2640\uFE0F", "man-tipping-hand": "\u{1F481}\u200D\u2642\uFE0F", information_desk_person: "\u{1F481}", "female-guard": "\u{1F482}\u200D\u2640\uFE0F", "male-guard": "\u{1F482}\u200D\u2642\uFE0F", guardsman: "\u{1F482}", dancer: "\u{1F483}", lipstick: "\u{1F484}", nail_care: "\u{1F485}", "woman-getting-massage": "\u{1F486}\u200D\u2640\uFE0F", "man-getting-massage": "\u{1F486}\u200D\u2642\uFE0F", massage: "\u{1F486}", "woman-getting-haircut": "\u{1F487}\u200D\u2640\uFE0F", "man-getting-haircut": "\u{1F487}\u200D\u2642\uFE0F", haircut: "\u{1F487}", barber: "\u{1F488}", syringe: "\u{1F489}", pill: "\u{1F48A}", kiss: "\u{1F48B}", love_letter: "\u{1F48C}", ring: "\u{1F48D}", gem: "\u{1F48E}", couplekiss: "\u{1F48F}", bouquet: "\u{1F490}", couple_with_heart: "\u{1F491}", wedding: "\u{1F492}", heartbeat: "\u{1F493}", broken_heart: "\u{1F494}", two_hearts: "\u{1F495}", sparkling_heart: "\u{1F496}", heartpulse: "\u{1F497}", cupid: "\u{1F498}", blue_heart: "\u{1F499}", green_heart: "\u{1F49A}", yellow_heart: "\u{1F49B}", purple_heart: "\u{1F49C}", gift_heart: "\u{1F49D}", revolving_hearts: "\u{1F49E}", heart_decoration: "\u{1F49F}", diamond_shape_with_a_dot_inside: "\u{1F4A0}", bulb: "\u{1F4A1}", anger: "\u{1F4A2}", bomb: "\u{1F4A3}", zzz: "\u{1F4A4}", boom: "\u{1F4A5}", sweat_drops: "\u{1F4A6}", droplet: "\u{1F4A7}", dash: "\u{1F4A8}", hankey: "\u{1F4A9}", muscle: "\u{1F4AA}", dizzy: "\u{1F4AB}", speech_balloon: "\u{1F4AC}", thought_balloon: "\u{1F4AD}", white_flower: "\u{1F4AE}", moneybag: "\u{1F4B0}", currency_exchange: "\u{1F4B1}", heavy_dollar_sign: "\u{1F4B2}", credit_card: "\u{1F4B3}", yen: "\u{1F4B4}", dollar: "\u{1F4B5}", euro: "\u{1F4B6}", pound: "\u{1F4B7}", money_with_wings: "\u{1F4B8}", chart: "\u{1F4B9}", seat: "\u{1F4BA}", computer: "\u{1F4BB}", briefcase: "\u{1F4BC}", minidisc: "\u{1F4BD}", floppy_disk: "\u{1F4BE}", cd: "\u{1F4BF}", dvd: "\u{1F4C0}", file_folder: "\u{1F4C1}", open_file_folder: "\u{1F4C2}", page_with_curl: "\u{1F4C3}", page_facing_up: "\u{1F4C4}", date: "\u{1F4C5}", calendar: "\u{1F4C6}", card_index: "\u{1F4C7}", chart_with_upwards_trend: "\u{1F4C8}", chart_with_downwards_trend: "\u{1F4C9}", bar_chart: "\u{1F4CA}", clipboard: "\u{1F4CB}", pushpin: "\u{1F4CC}", round_pushpin: "\u{1F4CD}", paperclip: "\u{1F4CE}", straight_ruler: "\u{1F4CF}", triangular_ruler: "\u{1F4D0}", bookmark_tabs: "\u{1F4D1}", ledger: "\u{1F4D2}", notebook: "\u{1F4D3}", notebook_with_decorative_cover: "\u{1F4D4}", closed_book: "\u{1F4D5}", book: "\u{1F4D6}", green_book: "\u{1F4D7}", blue_book: "\u{1F4D8}", orange_book: "\u{1F4D9}", books: "\u{1F4DA}", name_badge: "\u{1F4DB}", scroll: "\u{1F4DC}", memo: "\u{1F4DD}", telephone_receiver: "\u{1F4DE}", pager: "\u{1F4DF}", fax: "\u{1F4E0}", satellite_antenna: "\u{1F4E1}", loudspeaker: "\u{1F4E2}", mega: "\u{1F4E3}", outbox_tray: "\u{1F4E4}", inbox_tray: "\u{1F4E5}", package: "\u{1F4E6}", "e-mail": "\u{1F4E7}", incoming_envelope: "\u{1F4E8}", envelope_with_arrow: "\u{1F4E9}", mailbox_closed: "\u{1F4EA}", mailbox: "\u{1F4EB}", mailbox_with_mail: "\u{1F4EC}", mailbox_with_no_mail: "\u{1F4ED}", postbox: "\u{1F4EE}", postal_horn: "\u{1F4EF}", newspaper: "\u{1F4F0}", iphone: "\u{1F4F1}", calling: "\u{1F4F2}", vibration_mode: "\u{1F4F3}", mobile_phone_off: "\u{1F4F4}", no_mobile_phones: "\u{1F4F5}", signal_strength: "\u{1F4F6}", camera: "\u{1F4F7}", camera_with_flash: "\u{1F4F8}", video_camera: "\u{1F4F9}", tv: "\u{1F4FA}", radio: "\u{1F4FB}", vhs: "\u{1F4FC}", film_projector: "\u{1F4FD}\uFE0F", prayer_beads: "\u{1F4FF}", twisted_rightwards_arrows: "\u{1F500}", repeat: "\u{1F501}", repeat_one: "\u{1F502}", arrows_clockwise: "\u{1F503}", arrows_counterclockwise: "\u{1F504}", low_brightness: "\u{1F505}", high_brightness: "\u{1F506}", mute: "\u{1F507}", speaker: "\u{1F508}", sound: "\u{1F509}", loud_sound: "\u{1F50A}", battery: "\u{1F50B}", electric_plug: "\u{1F50C}", mag: "\u{1F50D}", mag_right: "\u{1F50E}", lock_with_ink_pen: "\u{1F50F}", closed_lock_with_key: "\u{1F510}", key: "\u{1F511}", lock: "\u{1F512}", unlock: "\u{1F513}", bell: "\u{1F514}", no_bell: "\u{1F515}", bookmark: "\u{1F516}", link: "\u{1F517}", radio_button: "\u{1F518}", back: "\u{1F519}", end: "\u{1F51A}", on: "\u{1F51B}", soon: "\u{1F51C}", top: "\u{1F51D}", underage: "\u{1F51E}", keycap_ten: "\u{1F51F}", capital_abcd: "\u{1F520}", abcd: "\u{1F521}", symbols: "\u{1F523}", abc: "\u{1F524}", fire: "\u{1F525}", flashlight: "\u{1F526}", wrench: "\u{1F527}", hammer: "\u{1F528}", nut_and_bolt: "\u{1F529}", hocho: "\u{1F52A}", gun: "\u{1F52B}", microscope: "\u{1F52C}", telescope: "\u{1F52D}", crystal_ball: "\u{1F52E}", six_pointed_star: "\u{1F52F}", beginner: "\u{1F530}", trident: "\u{1F531}", black_square_button: "\u{1F532}", white_square_button: "\u{1F533}", red_circle: "\u{1F534}", large_blue_circle: "\u{1F535}", large_orange_diamond: "\u{1F536}", large_blue_diamond: "\u{1F537}", small_orange_diamond: "\u{1F538}", small_blue_diamond: "\u{1F539}", small_red_triangle: "\u{1F53A}", small_red_triangle_down: "\u{1F53B}", arrow_up_small: "\u{1F53C}", arrow_down_small: "\u{1F53D}", om_symbol: "\u{1F549}\uFE0F", dove_of_peace: "\u{1F54A}\uFE0F", kaaba: "\u{1F54B}", mosque: "\u{1F54C}", synagogue: "\u{1F54D}", menorah_with_nine_branches: "\u{1F54E}", clock1: "\u{1F550}", clock2: "\u{1F551}", clock3: "\u{1F552}", clock4: "\u{1F553}", clock5: "\u{1F554}", clock6: "\u{1F555}", clock7: "\u{1F556}", clock8: "\u{1F557}", clock9: "\u{1F558}", clock10: "\u{1F559}", clock11: "\u{1F55A}", clock12: "\u{1F55B}", clock130: "\u{1F55C}", clock230: "\u{1F55D}", clock330: "\u{1F55E}", clock430: "\u{1F55F}", clock530: "\u{1F560}", clock630: "\u{1F561}", clock730: "\u{1F562}", clock830: "\u{1F563}", clock930: "\u{1F564}", clock1030: "\u{1F565}", clock1130: "\u{1F566}", clock1230: "\u{1F567}", candle: "\u{1F56F}\uFE0F", mantelpiece_clock: "\u{1F570}\uFE0F", hole: "\u{1F573}\uFE0F", man_in_business_suit_levitating: "\u{1F574}\uFE0F", "female-detective": "\u{1F575}\uFE0F\u200D\u2640\uFE0F", "male-detective": "\u{1F575}\uFE0F\u200D\u2642\uFE0F", sleuth_or_spy: "\u{1F575}\uFE0F", dark_sunglasses: "\u{1F576}\uFE0F", spider: "\u{1F577}\uFE0F", spider_web: "\u{1F578}\uFE0F", joystick: "\u{1F579}\uFE0F", man_dancing: "\u{1F57A}", linked_paperclips: "\u{1F587}\uFE0F", lower_left_ballpoint_pen: "\u{1F58A}\uFE0F", lower_left_fountain_pen: "\u{1F58B}\uFE0F", lower_left_paintbrush: "\u{1F58C}\uFE0F", lower_left_crayon: "\u{1F58D}\uFE0F", raised_hand_with_fingers_splayed: "\u{1F590}\uFE0F", middle_finger: "\u{1F595}", "spock-hand": "\u{1F596}", black_heart: "\u{1F5A4}", desktop_computer: "\u{1F5A5}\uFE0F", printer: "\u{1F5A8}\uFE0F", three_button_mouse: "\u{1F5B1}\uFE0F", trackball: "\u{1F5B2}\uFE0F", frame_with_picture: "\u{1F5BC}\uFE0F", card_index_dividers: "\u{1F5C2}\uFE0F", card_file_box: "\u{1F5C3}\uFE0F", file_cabinet: "\u{1F5C4}\uFE0F", wastebasket: "\u{1F5D1}\uFE0F", spiral_note_pad: "\u{1F5D2}\uFE0F", spiral_calendar_pad: "\u{1F5D3}\uFE0F", compression: "\u{1F5DC}\uFE0F", old_key: "\u{1F5DD}\uFE0F", rolled_up_newspaper: "\u{1F5DE}\uFE0F", dagger_knife: "\u{1F5E1}\uFE0F", speaking_head_in_silhouette: "\u{1F5E3}\uFE0F", left_speech_bubble: "\u{1F5E8}\uFE0F", right_anger_bubble: "\u{1F5EF}\uFE0F", ballot_box_with_ballot: "\u{1F5F3}\uFE0F", world_map: "\u{1F5FA}\uFE0F", mount_fuji: "\u{1F5FB}", tokyo_tower: "\u{1F5FC}", statue_of_liberty: "\u{1F5FD}", japan: "\u{1F5FE}", moyai: "\u{1F5FF}", grinning: "\u{1F600}", grin: "\u{1F601}", joy: "\u{1F602}", smiley: "\u{1F603}", smile: "\u{1F604}", sweat_smile: "\u{1F605}", laughing: "\u{1F606}", innocent: "\u{1F607}", smiling_imp: "\u{1F608}", wink: "\u{1F609}", blush: "\u{1F60A}", yum: "\u{1F60B}", relieved: "\u{1F60C}", heart_eyes: "\u{1F60D}", sunglasses: "\u{1F60E}", smirk: "\u{1F60F}", neutral_face: "\u{1F610}", expressionless: "\u{1F611}", unamused: "\u{1F612}", sweat: "\u{1F613}", pensive: "\u{1F614}", confused: "\u{1F615}", confounded: "\u{1F616}", kissing: "\u{1F617}", kissing_heart: "\u{1F618}", kissing_smiling_eyes: "\u{1F619}", kissing_closed_eyes: "\u{1F61A}", stuck_out_tongue: "\u{1F61B}", stuck_out_tongue_winking_eye: "\u{1F61C}", stuck_out_tongue_closed_eyes: "\u{1F61D}", disappointed: "\u{1F61E}", worried: "\u{1F61F}", angry: "\u{1F620}", rage: "\u{1F621}", cry: "\u{1F622}", persevere: "\u{1F623}", triumph: "\u{1F624}", disappointed_relieved: "\u{1F625}", frowning: "\u{1F626}", anguished: "\u{1F627}", fearful: "\u{1F628}", weary: "\u{1F629}", sleepy: "\u{1F62A}", tired_face: "\u{1F62B}", grimacing: "\u{1F62C}", sob: "\u{1F62D}", face_exhaling: "\u{1F62E}\u200D\u{1F4A8}", open_mouth: "\u{1F62E}", hushed: "\u{1F62F}", cold_sweat: "\u{1F630}", scream: "\u{1F631}", astonished: "\u{1F632}", flushed: "\u{1F633}", sleeping: "\u{1F634}", face_with_spiral_eyes: "\u{1F635}\u200D\u{1F4AB}", dizzy_face: "\u{1F635}", face_in_clouds: "\u{1F636}\u200D\u{1F32B}\uFE0F", no_mouth: "\u{1F636}", mask: "\u{1F637}", smile_cat: "\u{1F638}", joy_cat: "\u{1F639}", smiley_cat: "\u{1F63A}", heart_eyes_cat: "\u{1F63B}", smirk_cat: "\u{1F63C}", kissing_cat: "\u{1F63D}", pouting_cat: "\u{1F63E}", crying_cat_face: "\u{1F63F}", scream_cat: "\u{1F640}", slightly_frowning_face: "\u{1F641}", slightly_smiling_face: "\u{1F642}", upside_down_face: "\u{1F643}", face_with_rolling_eyes: "\u{1F644}", "woman-gesturing-no": "\u{1F645}\u200D\u2640\uFE0F", "man-gesturing-no": "\u{1F645}\u200D\u2642\uFE0F", no_good: "\u{1F645}", "woman-gesturing-ok": "\u{1F646}\u200D\u2640\uFE0F", "man-gesturing-ok": "\u{1F646}\u200D\u2642\uFE0F", ok_woman: "\u{1F646}", "woman-bowing": "\u{1F647}\u200D\u2640\uFE0F", "man-bowing": "\u{1F647}\u200D\u2642\uFE0F", bow: "\u{1F647}", see_no_evil: "\u{1F648}", hear_no_evil: "\u{1F649}", speak_no_evil: "\u{1F64A}", "woman-raising-hand": "\u{1F64B}\u200D\u2640\uFE0F", "man-raising-hand": "\u{1F64B}\u200D\u2642\uFE0F", raising_hand: "\u{1F64B}", raised_hands: "\u{1F64C}", "woman-frowning": "\u{1F64D}\u200D\u2640\uFE0F", "man-frowning": "\u{1F64D}\u200D\u2642\uFE0F", person_frowning: "\u{1F64D}", "woman-pouting": "\u{1F64E}\u200D\u2640\uFE0F", "man-pouting": "\u{1F64E}\u200D\u2642\uFE0F", person_with_pouting_face: "\u{1F64E}", pray: "\u{1F64F}", rocket: "\u{1F680}", helicopter: "\u{1F681}", steam_locomotive: "\u{1F682}", railway_car: "\u{1F683}", bullettrain_side: "\u{1F684}", bullettrain_front: "\u{1F685}", train2: "\u{1F686}", metro: "\u{1F687}", light_rail: "\u{1F688}", station: "\u{1F689}", tram: "\u{1F68A}", train: "\u{1F68B}", bus: "\u{1F68C}", oncoming_bus: "\u{1F68D}", trolleybus: "\u{1F68E}", busstop: "\u{1F68F}", minibus: "\u{1F690}", ambulance: "\u{1F691}", fire_engine: "\u{1F692}", police_car: "\u{1F693}", oncoming_police_car: "\u{1F694}", taxi: "\u{1F695}", oncoming_taxi: "\u{1F696}", car: "\u{1F697}", oncoming_automobile: "\u{1F698}", blue_car: "\u{1F699}", truck: "\u{1F69A}", articulated_lorry: "\u{1F69B}", tractor: "\u{1F69C}", monorail: "\u{1F69D}", mountain_railway: "\u{1F69E}", suspension_railway: "\u{1F69F}", mountain_cableway: "\u{1F6A0}", aerial_tramway: "\u{1F6A1}", ship: "\u{1F6A2}", "woman-rowing-boat": "\u{1F6A3}\u200D\u2640\uFE0F", "man-rowing-boat": "\u{1F6A3}\u200D\u2642\uFE0F", rowboat: "\u{1F6A3}", speedboat: "\u{1F6A4}", traffic_light: "\u{1F6A5}", vertical_traffic_light: "\u{1F6A6}", construction: "\u{1F6A7}", rotating_light: "\u{1F6A8}", triangular_flag_on_post: "\u{1F6A9}", door: "\u{1F6AA}", no_entry_sign: "\u{1F6AB}", smoking: "\u{1F6AC}", no_smoking: "\u{1F6AD}", put_litter_in_its_place: "\u{1F6AE}", do_not_litter: "\u{1F6AF}", potable_water: "\u{1F6B0}", "non-potable_water": "\u{1F6B1}", bike: "\u{1F6B2}", no_bicycles: "\u{1F6B3}", "woman-biking": "\u{1F6B4}\u200D\u2640\uFE0F", "man-biking": "\u{1F6B4}\u200D\u2642\uFE0F", bicyclist: "\u{1F6B4}", "woman-mountain-biking": "\u{1F6B5}\u200D\u2640\uFE0F", "man-mountain-biking": "\u{1F6B5}\u200D\u2642\uFE0F", mountain_bicyclist: "\u{1F6B5}", "woman-walking": "\u{1F6B6}\u200D\u2640\uFE0F", "man-walking": "\u{1F6B6}\u200D\u2642\uFE0F", walking: "\u{1F6B6}", no_pedestrians: "\u{1F6B7}", children_crossing: "\u{1F6B8}", mens: "\u{1F6B9}", womens: "\u{1F6BA}", restroom: "\u{1F6BB}", baby_symbol: "\u{1F6BC}", toilet: "\u{1F6BD}", wc: "\u{1F6BE}", shower: "\u{1F6BF}", bath: "\u{1F6C0}", bathtub: "\u{1F6C1}", passport_control: "\u{1F6C2}", customs: "\u{1F6C3}", baggage_claim: "\u{1F6C4}", left_luggage: "\u{1F6C5}", couch_and_lamp: "\u{1F6CB}\uFE0F", sleeping_accommodation: "\u{1F6CC}", shopping_bags: "\u{1F6CD}\uFE0F", bellhop_bell: "\u{1F6CE}\uFE0F", bed: "\u{1F6CF}\uFE0F", place_of_worship: "\u{1F6D0}", octagonal_sign: "\u{1F6D1}", shopping_trolley: "\u{1F6D2}", hindu_temple: "\u{1F6D5}", hut: "\u{1F6D6}", elevator: "\u{1F6D7}", hammer_and_wrench: "\u{1F6E0}\uFE0F", shield: "\u{1F6E1}\uFE0F", oil_drum: "\u{1F6E2}\uFE0F", motorway: "\u{1F6E3}\uFE0F", railway_track: "\u{1F6E4}\uFE0F", motor_boat: "\u{1F6E5}\uFE0F", small_airplane: "\u{1F6E9}\uFE0F", airplane_departure: "\u{1F6EB}", airplane_arriving: "\u{1F6EC}", satellite: "\u{1F6F0}\uFE0F", passenger_ship: "\u{1F6F3}\uFE0F", scooter: "\u{1F6F4}", motor_scooter: "\u{1F6F5}", canoe: "\u{1F6F6}", sled: "\u{1F6F7}", flying_saucer: "\u{1F6F8}", skateboard: "\u{1F6F9}", auto_rickshaw: "\u{1F6FA}", pickup_truck: "\u{1F6FB}", roller_skate: "\u{1F6FC}", large_orange_circle: "\u{1F7E0}", large_yellow_circle: "\u{1F7E1}", large_green_circle: "\u{1F7E2}", large_purple_circle: "\u{1F7E3}", large_brown_circle: "\u{1F7E4}", large_red_square: "\u{1F7E5}", large_blue_square: "\u{1F7E6}", large_orange_square: "\u{1F7E7}", large_yellow_square: "\u{1F7E8}", large_green_square: "\u{1F7E9}", large_purple_square: "\u{1F7EA}", large_brown_square: "\u{1F7EB}", pinched_fingers: "\u{1F90C}", white_heart: "\u{1F90D}", brown_heart: "\u{1F90E}", pinching_hand: "\u{1F90F}", zipper_mouth_face: "\u{1F910}", money_mouth_face: "\u{1F911}", face_with_thermometer: "\u{1F912}", nerd_face: "\u{1F913}", thinking_face: "\u{1F914}", face_with_head_bandage: "\u{1F915}", robot_face: "\u{1F916}", hugging_face: "\u{1F917}", the_horns: "\u{1F918}", call_me_hand: "\u{1F919}", raised_back_of_hand: "\u{1F91A}", "left-facing_fist": "\u{1F91B}", "right-facing_fist": "\u{1F91C}", handshake: "\u{1F91D}", crossed_fingers: "\u{1F91E}", i_love_you_hand_sign: "\u{1F91F}", face_with_cowboy_hat: "\u{1F920}", clown_face: "\u{1F921}", nauseated_face: "\u{1F922}", rolling_on_the_floor_laughing: "\u{1F923}", drooling_face: "\u{1F924}", lying_face: "\u{1F925}", "woman-facepalming": "\u{1F926}\u200D\u2640\uFE0F", "man-facepalming": "\u{1F926}\u200D\u2642\uFE0F", face_palm: "\u{1F926}", sneezing_face: "\u{1F927}", face_with_raised_eyebrow: "\u{1F928}", "star-struck": "\u{1F929}", zany_face: "\u{1F92A}", shushing_face: "\u{1F92B}", face_with_symbols_on_mouth: "\u{1F92C}", face_with_hand_over_mouth: "\u{1F92D}", face_vomiting: "\u{1F92E}", exploding_head: "\u{1F92F}", pregnant_woman: "\u{1F930}", "breast-feeding": "\u{1F931}", palms_up_together: "\u{1F932}", selfie: "\u{1F933}", prince: "\u{1F934}", woman_in_tuxedo: "\u{1F935}\u200D\u2640\uFE0F", man_in_tuxedo: "\u{1F935}\u200D\u2642\uFE0F", person_in_tuxedo: "\u{1F935}", mrs_claus: "\u{1F936}", "woman-shrugging": "\u{1F937}\u200D\u2640\uFE0F", "man-shrugging": "\u{1F937}\u200D\u2642\uFE0F", shrug: "\u{1F937}", "woman-cartwheeling": "\u{1F938}\u200D\u2640\uFE0F", "man-cartwheeling": "\u{1F938}\u200D\u2642\uFE0F", person_doing_cartwheel: "\u{1F938}", "woman-juggling": "\u{1F939}\u200D\u2640\uFE0F", "man-juggling": "\u{1F939}\u200D\u2642\uFE0F", juggling: "\u{1F939}", fencer: "\u{1F93A}", "woman-wrestling": "\u{1F93C}\u200D\u2640\uFE0F", "man-wrestling": "\u{1F93C}\u200D\u2642\uFE0F", wrestlers: "\u{1F93C}", "woman-playing-water-polo": "\u{1F93D}\u200D\u2640\uFE0F", "man-playing-water-polo": "\u{1F93D}\u200D\u2642\uFE0F", water_polo: "\u{1F93D}", "woman-playing-handball": "\u{1F93E}\u200D\u2640\uFE0F", "man-playing-handball": "\u{1F93E}\u200D\u2642\uFE0F", handball: "\u{1F93E}", diving_mask: "\u{1F93F}", wilted_flower: "\u{1F940}", drum_with_drumsticks: "\u{1F941}", clinking_glasses: "\u{1F942}", tumbler_glass: "\u{1F943}", spoon: "\u{1F944}", goal_net: "\u{1F945}", first_place_medal: "\u{1F947}", second_place_medal: "\u{1F948}", third_place_medal: "\u{1F949}", boxing_glove: "\u{1F94A}", martial_arts_uniform: "\u{1F94B}", curling_stone: "\u{1F94C}", lacrosse: "\u{1F94D}", softball: "\u{1F94E}", flying_disc: "\u{1F94F}", croissant: "\u{1F950}", avocado: "\u{1F951}", cucumber: "\u{1F952}", bacon: "\u{1F953}", potato: "\u{1F954}", carrot: "\u{1F955}", baguette_bread: "\u{1F956}", green_salad: "\u{1F957}", shallow_pan_of_food: "\u{1F958}", stuffed_flatbread: "\u{1F959}", egg: "\u{1F95A}", glass_of_milk: "\u{1F95B}", peanuts: "\u{1F95C}", kiwifruit: "\u{1F95D}", pancakes: "\u{1F95E}", dumpling: "\u{1F95F}", fortune_cookie: "\u{1F960}", takeout_box: "\u{1F961}", chopsticks: "\u{1F962}", bowl_with_spoon: "\u{1F963}", cup_with_straw: "\u{1F964}", coconut: "\u{1F965}", broccoli: "\u{1F966}", pie: "\u{1F967}", pretzel: "\u{1F968}", cut_of_meat: "\u{1F969}", sandwich: "\u{1F96A}", canned_food: "\u{1F96B}", leafy_green: "\u{1F96C}", mango: "\u{1F96D}", moon_cake: "\u{1F96E}", bagel: "\u{1F96F}", smiling_face_with_3_hearts: "\u{1F970}", yawning_face: "\u{1F971}", smiling_face_with_tear: "\u{1F972}", partying_face: "\u{1F973}", woozy_face: "\u{1F974}", hot_face: "\u{1F975}", cold_face: "\u{1F976}", ninja: "\u{1F977}", disguised_face: "\u{1F978}", pleading_face: "\u{1F97A}", sari: "\u{1F97B}", lab_coat: "\u{1F97C}", goggles: "\u{1F97D}", hiking_boot: "\u{1F97E}", womans_flat_shoe: "\u{1F97F}", crab: "\u{1F980}", lion_face: "\u{1F981}", scorpion: "\u{1F982}", turkey: "\u{1F983}", unicorn_face: "\u{1F984}", eagle: "\u{1F985}", duck: "\u{1F986}", bat: "\u{1F987}", shark: "\u{1F988}", owl: "\u{1F989}", fox_face: "\u{1F98A}", butterfly: "\u{1F98B}", deer: "\u{1F98C}", gorilla: "\u{1F98D}", lizard: "\u{1F98E}", rhinoceros: "\u{1F98F}", shrimp: "\u{1F990}", squid: "\u{1F991}", giraffe_face: "\u{1F992}", zebra_face: "\u{1F993}", hedgehog: "\u{1F994}", sauropod: "\u{1F995}", "t-rex": "\u{1F996}", cricket: "\u{1F997}", kangaroo: "\u{1F998}", llama: "\u{1F999}", peacock: "\u{1F99A}", hippopotamus: "\u{1F99B}", parrot: "\u{1F99C}", raccoon: "\u{1F99D}", lobster: "\u{1F99E}", mosquito: "\u{1F99F}", microbe: "\u{1F9A0}", badger: "\u{1F9A1}", swan: "\u{1F9A2}", mammoth: "\u{1F9A3}", dodo: "\u{1F9A4}", sloth: "\u{1F9A5}", otter: "\u{1F9A6}", orangutan: "\u{1F9A7}", skunk: "\u{1F9A8}", flamingo: "\u{1F9A9}", oyster: "\u{1F9AA}", beaver: "\u{1F9AB}", bison: "\u{1F9AC}", seal: "\u{1F9AD}", guide_dog: "\u{1F9AE}", probing_cane: "\u{1F9AF}", bone: "\u{1F9B4}", leg: "\u{1F9B5}", foot: "\u{1F9B6}", tooth: "\u{1F9B7}", female_superhero: "\u{1F9B8}\u200D\u2640\uFE0F", male_superhero: "\u{1F9B8}\u200D\u2642\uFE0F", superhero: "\u{1F9B8}", female_supervillain: "\u{1F9B9}\u200D\u2640\uFE0F", male_supervillain: "\u{1F9B9}\u200D\u2642\uFE0F", supervillain: "\u{1F9B9}", safety_vest: "\u{1F9BA}", ear_with_hearing_aid: "\u{1F9BB}", motorized_wheelchair: "\u{1F9BC}", manual_wheelchair: "\u{1F9BD}", mechanical_arm: "\u{1F9BE}", mechanical_leg: "\u{1F9BF}", cheese_wedge: "\u{1F9C0}", cupcake: "\u{1F9C1}", salt: "\u{1F9C2}", beverage_box: "\u{1F9C3}", garlic: "\u{1F9C4}", onion: "\u{1F9C5}", falafel: "\u{1F9C6}", waffle: "\u{1F9C7}", butter: "\u{1F9C8}", mate_drink: "\u{1F9C9}", ice_cube: "\u{1F9CA}", bubble_tea: "\u{1F9CB}", woman_standing: "\u{1F9CD}\u200D\u2640\uFE0F", man_standing: "\u{1F9CD}\u200D\u2642\uFE0F", standing_person: "\u{1F9CD}", woman_kneeling: "\u{1F9CE}\u200D\u2640\uFE0F", man_kneeling: "\u{1F9CE}\u200D\u2642\uFE0F", kneeling_person: "\u{1F9CE}", deaf_woman: "\u{1F9CF}\u200D\u2640\uFE0F", deaf_man: "\u{1F9CF}\u200D\u2642\uFE0F", deaf_person: "\u{1F9CF}", face_with_monocle: "\u{1F9D0}", farmer: "\u{1F9D1}\u200D\u{1F33E}", cook: "\u{1F9D1}\u200D\u{1F373}", person_feeding_baby: "\u{1F9D1}\u200D\u{1F37C}", mx_claus: "\u{1F9D1}\u200D\u{1F384}", student: "\u{1F9D1}\u200D\u{1F393}", singer: "\u{1F9D1}\u200D\u{1F3A4}", artist: "\u{1F9D1}\u200D\u{1F3A8}", teacher: "\u{1F9D1}\u200D\u{1F3EB}", factory_worker: "\u{1F9D1}\u200D\u{1F3ED}", technologist: "\u{1F9D1}\u200D\u{1F4BB}", office_worker: "\u{1F9D1}\u200D\u{1F4BC}", mechanic: "\u{1F9D1}\u200D\u{1F527}", scientist: "\u{1F9D1}\u200D\u{1F52C}", astronaut: "\u{1F9D1}\u200D\u{1F680}", firefighter: "\u{1F9D1}\u200D\u{1F692}", people_holding_hands: "\u{1F9D1}\u200D\u{1F91D}\u200D\u{1F9D1}", person_with_probing_cane: "\u{1F9D1}\u200D\u{1F9AF}", red_haired_person: "\u{1F9D1}\u200D\u{1F9B0}", curly_haired_person: "\u{1F9D1}\u200D\u{1F9B1}", bald_person: "\u{1F9D1}\u200D\u{1F9B2}", white_haired_person: "\u{1F9D1}\u200D\u{1F9B3}", person_in_motorized_wheelchair: "\u{1F9D1}\u200D\u{1F9BC}", person_in_manual_wheelchair: "\u{1F9D1}\u200D\u{1F9BD}", health_worker: "\u{1F9D1}\u200D\u2695\uFE0F", judge: "\u{1F9D1}\u200D\u2696\uFE0F", pilot: "\u{1F9D1}\u200D\u2708\uFE0F", adult: "\u{1F9D1}", child: "\u{1F9D2}", older_adult: "\u{1F9D3}", woman_with_beard: "\u{1F9D4}\u200D\u2640\uFE0F", man_with_beard: "\u{1F9D4}\u200D\u2642\uFE0F", bearded_person: "\u{1F9D4}", person_with_headscarf: "\u{1F9D5}", woman_in_steamy_room: "\u{1F9D6}\u200D\u2640\uFE0F", man_in_steamy_room: "\u{1F9D6}\u200D\u2642\uFE0F", person_in_steamy_room: "\u{1F9D6}", woman_climbing: "\u{1F9D7}\u200D\u2640\uFE0F", man_climbing: "\u{1F9D7}\u200D\u2642\uFE0F", person_climbing: "\u{1F9D7}", woman_in_lotus_position: "\u{1F9D8}\u200D\u2640\uFE0F", man_in_lotus_position: "\u{1F9D8}\u200D\u2642\uFE0F", person_in_lotus_position: "\u{1F9D8}", female_mage: "\u{1F9D9}\u200D\u2640\uFE0F", male_mage: "\u{1F9D9}\u200D\u2642\uFE0F", mage: "\u{1F9D9}", female_fairy: "\u{1F9DA}\u200D\u2640\uFE0F", male_fairy: "\u{1F9DA}\u200D\u2642\uFE0F", fairy: "\u{1F9DA}", female_vampire: "\u{1F9DB}\u200D\u2640\uFE0F", male_vampire: "\u{1F9DB}\u200D\u2642\uFE0F", vampire: "\u{1F9DB}", mermaid: "\u{1F9DC}\u200D\u2640\uFE0F", merman: "\u{1F9DC}\u200D\u2642\uFE0F", merperson: "\u{1F9DC}", female_elf: "\u{1F9DD}\u200D\u2640\uFE0F", male_elf: "\u{1F9DD}\u200D\u2642\uFE0F", elf: "\u{1F9DD}", female_genie: "\u{1F9DE}\u200D\u2640\uFE0F", male_genie: "\u{1F9DE}\u200D\u2642\uFE0F", genie: "\u{1F9DE}", female_zombie: "\u{1F9DF}\u200D\u2640\uFE0F", male_zombie: "\u{1F9DF}\u200D\u2642\uFE0F", zombie: "\u{1F9DF}", brain: "\u{1F9E0}", orange_heart: "\u{1F9E1}", billed_cap: "\u{1F9E2}", scarf: "\u{1F9E3}", gloves: "\u{1F9E4}", coat: "\u{1F9E5}", socks: "\u{1F9E6}", red_envelope: "\u{1F9E7}", firecracker: "\u{1F9E8}", jigsaw: "\u{1F9E9}", test_tube: "\u{1F9EA}", petri_dish: "\u{1F9EB}", dna: "\u{1F9EC}", compass: "\u{1F9ED}", abacus: "\u{1F9EE}", fire_extinguisher: "\u{1F9EF}", toolbox: "\u{1F9F0}", bricks: "\u{1F9F1}", magnet: "\u{1F9F2}", luggage: "\u{1F9F3}", lotion_bottle: "\u{1F9F4}", thread: "\u{1F9F5}", yarn: "\u{1F9F6}", safety_pin: "\u{1F9F7}", teddy_bear: "\u{1F9F8}", broom: "\u{1F9F9}", basket: "\u{1F9FA}", roll_of_paper: "\u{1F9FB}", soap: "\u{1F9FC}", sponge: "\u{1F9FD}", receipt: "\u{1F9FE}", nazar_amulet: "\u{1F9FF}", ballet_shoes: "\u{1FA70}", "one-piece_swimsuit": "\u{1FA71}", briefs: "\u{1FA72}", shorts: "\u{1FA73}", thong_sandal: "\u{1FA74}", drop_of_blood: "\u{1FA78}", adhesive_bandage: "\u{1FA79}", stethoscope: "\u{1FA7A}", "yo-yo": "\u{1FA80}", kite: "\u{1FA81}", parachute: "\u{1FA82}", boomerang: "\u{1FA83}", magic_wand: "\u{1FA84}", pinata: "\u{1FA85}", nesting_dolls: "\u{1FA86}", ringed_planet: "\u{1FA90}", chair: "\u{1FA91}", razor: "\u{1FA92}", axe: "\u{1FA93}", diya_lamp: "\u{1FA94}", banjo: "\u{1FA95}", military_helmet: "\u{1FA96}", accordion: "\u{1FA97}", long_drum: "\u{1FA98}", coin: "\u{1FA99}", carpentry_saw: "\u{1FA9A}", screwdriver: "\u{1FA9B}", ladder: "\u{1FA9C}", hook: "\u{1FA9D}", mirror: "\u{1FA9E}", window: "\u{1FA9F}", plunger: "\u{1FAA0}", sewing_needle: "\u{1FAA1}", knot: "\u{1FAA2}", bucket: "\u{1FAA3}", mouse_trap: "\u{1FAA4}", toothbrush: "\u{1FAA5}", headstone: "\u{1FAA6}", placard: "\u{1FAA7}", rock: "\u{1FAA8}", fly: "\u{1FAB0}", worm: "\u{1FAB1}", beetle: "\u{1FAB2}", cockroach: "\u{1FAB3}", potted_plant: "\u{1FAB4}", wood: "\u{1FAB5}", feather: "\u{1FAB6}", anatomical_heart: "\u{1FAC0}", lungs: "\u{1FAC1}", people_hugging: "\u{1FAC2}", blueberries: "\u{1FAD0}", bell_pepper: "\u{1FAD1}", olive: "\u{1FAD2}", flatbread: "\u{1FAD3}", tamale: "\u{1FAD4}", fondue: "\u{1FAD5}", teapot: "\u{1FAD6}", bangbang: "\u203C\uFE0F", interrobang: "\u2049\uFE0F", tm: "\u2122\uFE0F", information_source: "\u2139\uFE0F", left_right_arrow: "\u2194\uFE0F", arrow_up_down: "\u2195\uFE0F", arrow_upper_left: "\u2196\uFE0F", arrow_upper_right: "\u2197\uFE0F", arrow_lower_right: "\u2198\uFE0F", arrow_lower_left: "\u2199\uFE0F", leftwards_arrow_with_hook: "\u21A9\uFE0F", arrow_right_hook: "\u21AA\uFE0F", watch: "\u231A", hourglass: "\u231B", keyboard: "\u2328\uFE0F", eject: "\u23CF\uFE0F", fast_forward: "\u23E9", rewind: "\u23EA", arrow_double_up: "\u23EB", arrow_double_down: "\u23EC", black_right_pointing_double_triangle_with_vertical_bar: "\u23ED\uFE0F", black_left_pointing_double_triangle_with_vertical_bar: "\u23EE\uFE0F", black_right_pointing_triangle_with_double_vertical_bar: "\u23EF\uFE0F", alarm_clock: "\u23F0", stopwatch: "\u23F1\uFE0F", timer_clock: "\u23F2\uFE0F", hourglass_flowing_sand: "\u23F3", double_vertical_bar: "\u23F8\uFE0F", black_square_for_stop: "\u23F9\uFE0F", black_circle_for_record: "\u23FA\uFE0F", m: "\u24C2\uFE0F", black_small_square: "\u25AA\uFE0F", white_small_square: "\u25AB\uFE0F", arrow_forward: "\u25B6\uFE0F", arrow_backward: "\u25C0\uFE0F", white_medium_square: "\u25FB\uFE0F", black_medium_square: "\u25FC\uFE0F", white_medium_small_square: "\u25FD", black_medium_small_square: "\u25FE", sunny: "\u2600\uFE0F", cloud: "\u2601\uFE0F", umbrella: "\u2602\uFE0F", snowman: "\u2603\uFE0F", comet: "\u2604\uFE0F", phone: "\u260E\uFE0F", ballot_box_with_check: "\u2611\uFE0F", umbrella_with_rain_drops: "\u2614", coffee: "\u2615", shamrock: "\u2618\uFE0F", point_up: "\u261D\uFE0F", skull_and_crossbones: "\u2620\uFE0F", radioactive_sign: "\u2622\uFE0F", biohazard_sign: "\u2623\uFE0F", orthodox_cross: "\u2626\uFE0F", star_and_crescent: "\u262A\uFE0F", peace_symbol: "\u262E\uFE0F", yin_yang: "\u262F\uFE0F", wheel_of_dharma: "\u2638\uFE0F", white_frowning_face: "\u2639\uFE0F", relaxed: "\u263A\uFE0F", female_sign: "\u2640\uFE0F", male_sign: "\u2642\uFE0F", aries: "\u2648", taurus: "\u2649", gemini: "\u264A", cancer: "\u264B", leo: "\u264C", virgo: "\u264D", libra: "\u264E", scorpius: "\u264F", sagittarius: "\u2650", capricorn: "\u2651", aquarius: "\u2652", pisces: "\u2653", chess_pawn: "\u265F\uFE0F", spades: "\u2660\uFE0F", clubs: "\u2663\uFE0F", hearts: "\u2665\uFE0F", diamonds: "\u2666\uFE0F", hotsprings: "\u2668\uFE0F", recycle: "\u267B\uFE0F", infinity: "\u267E\uFE0F", wheelchair: "\u267F", hammer_and_pick: "\u2692\uFE0F", anchor: "\u2693", crossed_swords: "\u2694\uFE0F", medical_symbol: "\u2695\uFE0F", scales: "\u2696\uFE0F", alembic: "\u2697\uFE0F", gear: "\u2699\uFE0F", atom_symbol: "\u269B\uFE0F", fleur_de_lis: "\u269C\uFE0F", warning: "\u26A0\uFE0F", zap: "\u26A1", transgender_symbol: "\u26A7\uFE0F", white_circle: "\u26AA", black_circle: "\u26AB", coffin: "\u26B0\uFE0F", funeral_urn: "\u26B1\uFE0F", soccer: "\u26BD", baseball: "\u26BE", snowman_without_snow: "\u26C4", partly_sunny: "\u26C5", thunder_cloud_and_rain: "\u26C8\uFE0F", ophiuchus: "\u26CE", pick: "\u26CF\uFE0F", helmet_with_white_cross: "\u26D1\uFE0F", chains: "\u26D3\uFE0F", no_entry: "\u26D4", shinto_shrine: "\u26E9\uFE0F", church: "\u26EA", mountain: "\u26F0\uFE0F", umbrella_on_ground: "\u26F1\uFE0F", fountain: "\u26F2", golf: "\u26F3", ferry: "\u26F4\uFE0F", boat: "\u26F5", skier: "\u26F7\uFE0F", ice_skate: "\u26F8\uFE0F", "woman-bouncing-ball": "\u26F9\uFE0F\u200D\u2640\uFE0F", "man-bouncing-ball": "\u26F9\uFE0F\u200D\u2642\uFE0F", person_with_ball: "\u26F9\uFE0F", tent: "\u26FA", fuelpump: "\u26FD", scissors: "\u2702\uFE0F", white_check_mark: "\u2705", airplane: "\u2708\uFE0F", email: "\u2709\uFE0F", fist: "\u270A", hand: "\u270B", v: "\u270C\uFE0F", writing_hand: "\u270D\uFE0F", pencil2: "\u270F\uFE0F", black_nib: "\u2712\uFE0F", heavy_check_mark: "\u2714\uFE0F", heavy_multiplication_x: "\u2716\uFE0F", latin_cross: "\u271D\uFE0F", star_of_david: "\u2721\uFE0F", sparkles: "\u2728", eight_spoked_asterisk: "\u2733\uFE0F", eight_pointed_black_star: "\u2734\uFE0F", snowflake: "\u2744\uFE0F", sparkle: "\u2747\uFE0F", x: "\u274C", negative_squared_cross_mark: "\u274E", question: "\u2753", grey_question: "\u2754", grey_exclamation: "\u2755", exclamation: "\u2757", heavy_heart_exclamation_mark_ornament: "\u2763\uFE0F", heart_on_fire: "\u2764\uFE0F\u200D\u{1F525}", mending_heart: "\u2764\uFE0F\u200D\u{1FA79}", heart: "\u2764\uFE0F", heavy_plus_sign: "\u2795", heavy_minus_sign: "\u2796", heavy_division_sign: "\u2797", arrow_right: "\u27A1\uFE0F", curly_loop: "\u27B0", loop: "\u27BF", arrow_heading_up: "\u2934\uFE0F", arrow_heading_down: "\u2935\uFE0F", arrow_left: "\u2B05\uFE0F", arrow_up: "\u2B06\uFE0F", arrow_down: "\u2B07\uFE0F", black_large_square: "\u2B1B", white_large_square: "\u2B1C", star: "\u2B50", o: "\u2B55", wavy_dash: "\u3030\uFE0F", part_alternation_mark: "\u303D\uFE0F", congratulations: "\u3297\uFE0F", secret: "\u3299\uFE0F", poop: "\u{1F4A9}", free_of_charge: "\u{1F21A}", reserved: "\u{1F22F}", prohibited: "\u{1F232}", vacancy: "\u{1F233}", passing_grade: "\u{1F234}", no_vacancy: "\u{1F235}", not_free_of_charge: "\u{1F236}", month: "\u{1F237}\uFE0F", application: "\u{1F238}", discount: "\u{1F239}", open_for_business: "\u{1F23A}" };
  }
});

// node_modules/emoji-name-map/lib/index.js
var require_lib = __commonJS({
  "node_modules/emoji-name-map/lib/index.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var emojiDatasource = require_datasource();
    var nameMap = module.exports = {};
    nameMap.emoji = emojiDatasource;
    nameMap.get = function(name) {
      if (name.charAt(0) === ":") {
        name = name.slice(1, -1);
      }
      return this.emoji[name];
    };
  }
});

// node_modules/word-wrap/index.js
var require_word_wrap = __commonJS({
  "node_modules/word-wrap/index.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    function trimEnd(str) {
      let lastCharPos = str.length - 1;
      let lastChar = str[lastCharPos];
      while (lastChar === " " || lastChar === "	") {
        lastChar = str[--lastCharPos];
      }
      return str.substring(0, lastCharPos + 1);
    }
    __name(trimEnd, "trimEnd");
    function trimTabAndSpaces(str) {
      const lines = str.split("\n");
      const trimmedLines = lines.map((line) => trimEnd(line));
      return trimmedLines.join("\n");
    }
    __name(trimTabAndSpaces, "trimTabAndSpaces");
    module.exports = function(str, options) {
      options = options || {};
      if (str == null) {
        return str;
      }
      var width = options.width || 50;
      var indent = typeof options.indent === "string" ? options.indent : "  ";
      var newline = options.newline || "\n" + indent;
      var escape = typeof options.escape === "function" ? options.escape : identity;
      var regexString = ".{1," + width + "}";
      if (options.cut !== true) {
        regexString += "([\\s\u200B]+|$)|[^\\s\u200B]+?([\\s\u200B]+|$)";
      }
      var re = new RegExp(regexString, "g");
      var lines = str.match(re) || [];
      var result = indent + lines.map(function(line) {
        if (line.slice(-1) === "\n") {
          line = line.slice(0, line.length - 1);
        }
        return escape(line);
      }).join(newline);
      if (options.trim === true) {
        result = trimTabAndSpaces(result);
      }
      return result;
    };
    function identity(str) {
      return str;
    }
    __name(identity, "identity");
  }
});

// ../../../Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/fs/promises.mjs
var access, copyFile, cp, open, opendir, rename, truncate, rm, rmdir, mkdir, readdir, readlink, symlink, lstat, stat, link, unlink, chmod, lchmod, lchown, chown, utimes, lutimes, realpath, mkdtemp, writeFile, appendFile, readFile, watch, statfs, glob;
var init_promises = __esm({
  "../../../Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/fs/promises.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    access = /* @__PURE__ */ notImplemented("fs.access");
    copyFile = /* @__PURE__ */ notImplemented("fs.copyFile");
    cp = /* @__PURE__ */ notImplemented("fs.cp");
    open = /* @__PURE__ */ notImplemented("fs.open");
    opendir = /* @__PURE__ */ notImplemented("fs.opendir");
    rename = /* @__PURE__ */ notImplemented("fs.rename");
    truncate = /* @__PURE__ */ notImplemented("fs.truncate");
    rm = /* @__PURE__ */ notImplemented("fs.rm");
    rmdir = /* @__PURE__ */ notImplemented("fs.rmdir");
    mkdir = /* @__PURE__ */ notImplemented("fs.mkdir");
    readdir = /* @__PURE__ */ notImplemented("fs.readdir");
    readlink = /* @__PURE__ */ notImplemented("fs.readlink");
    symlink = /* @__PURE__ */ notImplemented("fs.symlink");
    lstat = /* @__PURE__ */ notImplemented("fs.lstat");
    stat = /* @__PURE__ */ notImplemented("fs.stat");
    link = /* @__PURE__ */ notImplemented("fs.link");
    unlink = /* @__PURE__ */ notImplemented("fs.unlink");
    chmod = /* @__PURE__ */ notImplemented("fs.chmod");
    lchmod = /* @__PURE__ */ notImplemented("fs.lchmod");
    lchown = /* @__PURE__ */ notImplemented("fs.lchown");
    chown = /* @__PURE__ */ notImplemented("fs.chown");
    utimes = /* @__PURE__ */ notImplemented("fs.utimes");
    lutimes = /* @__PURE__ */ notImplemented("fs.lutimes");
    realpath = /* @__PURE__ */ notImplemented("fs.realpath");
    mkdtemp = /* @__PURE__ */ notImplemented("fs.mkdtemp");
    writeFile = /* @__PURE__ */ notImplemented("fs.writeFile");
    appendFile = /* @__PURE__ */ notImplemented("fs.appendFile");
    readFile = /* @__PURE__ */ notImplemented("fs.readFile");
    watch = /* @__PURE__ */ notImplemented("fs.watch");
    statfs = /* @__PURE__ */ notImplemented("fs.statfs");
    glob = /* @__PURE__ */ notImplemented("fs.glob");
  }
});

// ../../../Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/fs/constants.mjs
var constants_exports = {};
__export(constants_exports, {
  COPYFILE_EXCL: () => COPYFILE_EXCL,
  COPYFILE_FICLONE: () => COPYFILE_FICLONE,
  COPYFILE_FICLONE_FORCE: () => COPYFILE_FICLONE_FORCE,
  EXTENSIONLESS_FORMAT_JAVASCRIPT: () => EXTENSIONLESS_FORMAT_JAVASCRIPT,
  EXTENSIONLESS_FORMAT_WASM: () => EXTENSIONLESS_FORMAT_WASM,
  F_OK: () => F_OK,
  O_APPEND: () => O_APPEND,
  O_CREAT: () => O_CREAT,
  O_DIRECT: () => O_DIRECT,
  O_DIRECTORY: () => O_DIRECTORY,
  O_DSYNC: () => O_DSYNC,
  O_EXCL: () => O_EXCL,
  O_NOATIME: () => O_NOATIME,
  O_NOCTTY: () => O_NOCTTY,
  O_NOFOLLOW: () => O_NOFOLLOW,
  O_NONBLOCK: () => O_NONBLOCK,
  O_RDONLY: () => O_RDONLY,
  O_RDWR: () => O_RDWR,
  O_SYNC: () => O_SYNC,
  O_TRUNC: () => O_TRUNC,
  O_WRONLY: () => O_WRONLY,
  R_OK: () => R_OK,
  S_IFBLK: () => S_IFBLK,
  S_IFCHR: () => S_IFCHR,
  S_IFDIR: () => S_IFDIR,
  S_IFIFO: () => S_IFIFO,
  S_IFLNK: () => S_IFLNK,
  S_IFMT: () => S_IFMT,
  S_IFREG: () => S_IFREG,
  S_IFSOCK: () => S_IFSOCK,
  S_IRGRP: () => S_IRGRP,
  S_IROTH: () => S_IROTH,
  S_IRUSR: () => S_IRUSR,
  S_IRWXG: () => S_IRWXG,
  S_IRWXO: () => S_IRWXO,
  S_IRWXU: () => S_IRWXU,
  S_IWGRP: () => S_IWGRP,
  S_IWOTH: () => S_IWOTH,
  S_IWUSR: () => S_IWUSR,
  S_IXGRP: () => S_IXGRP,
  S_IXOTH: () => S_IXOTH,
  S_IXUSR: () => S_IXUSR,
  UV_DIRENT_BLOCK: () => UV_DIRENT_BLOCK,
  UV_DIRENT_CHAR: () => UV_DIRENT_CHAR,
  UV_DIRENT_DIR: () => UV_DIRENT_DIR,
  UV_DIRENT_FIFO: () => UV_DIRENT_FIFO,
  UV_DIRENT_FILE: () => UV_DIRENT_FILE,
  UV_DIRENT_LINK: () => UV_DIRENT_LINK,
  UV_DIRENT_SOCKET: () => UV_DIRENT_SOCKET,
  UV_DIRENT_UNKNOWN: () => UV_DIRENT_UNKNOWN,
  UV_FS_COPYFILE_EXCL: () => UV_FS_COPYFILE_EXCL,
  UV_FS_COPYFILE_FICLONE: () => UV_FS_COPYFILE_FICLONE,
  UV_FS_COPYFILE_FICLONE_FORCE: () => UV_FS_COPYFILE_FICLONE_FORCE,
  UV_FS_O_FILEMAP: () => UV_FS_O_FILEMAP,
  UV_FS_SYMLINK_DIR: () => UV_FS_SYMLINK_DIR,
  UV_FS_SYMLINK_JUNCTION: () => UV_FS_SYMLINK_JUNCTION,
  W_OK: () => W_OK,
  X_OK: () => X_OK
});
var UV_FS_SYMLINK_DIR, UV_FS_SYMLINK_JUNCTION, O_RDONLY, O_WRONLY, O_RDWR, UV_DIRENT_UNKNOWN, UV_DIRENT_FILE, UV_DIRENT_DIR, UV_DIRENT_LINK, UV_DIRENT_FIFO, UV_DIRENT_SOCKET, UV_DIRENT_CHAR, UV_DIRENT_BLOCK, EXTENSIONLESS_FORMAT_JAVASCRIPT, EXTENSIONLESS_FORMAT_WASM, S_IFMT, S_IFREG, S_IFDIR, S_IFCHR, S_IFBLK, S_IFIFO, S_IFLNK, S_IFSOCK, O_CREAT, O_EXCL, UV_FS_O_FILEMAP, O_NOCTTY, O_TRUNC, O_APPEND, O_DIRECTORY, O_NOATIME, O_NOFOLLOW, O_SYNC, O_DSYNC, O_DIRECT, O_NONBLOCK, S_IRWXU, S_IRUSR, S_IWUSR, S_IXUSR, S_IRWXG, S_IRGRP, S_IWGRP, S_IXGRP, S_IRWXO, S_IROTH, S_IWOTH, S_IXOTH, F_OK, R_OK, W_OK, X_OK, UV_FS_COPYFILE_EXCL, COPYFILE_EXCL, UV_FS_COPYFILE_FICLONE, COPYFILE_FICLONE, UV_FS_COPYFILE_FICLONE_FORCE, COPYFILE_FICLONE_FORCE;
var init_constants = __esm({
  "../../../Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/fs/constants.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    UV_FS_SYMLINK_DIR = 1;
    UV_FS_SYMLINK_JUNCTION = 2;
    O_RDONLY = 0;
    O_WRONLY = 1;
    O_RDWR = 2;
    UV_DIRENT_UNKNOWN = 0;
    UV_DIRENT_FILE = 1;
    UV_DIRENT_DIR = 2;
    UV_DIRENT_LINK = 3;
    UV_DIRENT_FIFO = 4;
    UV_DIRENT_SOCKET = 5;
    UV_DIRENT_CHAR = 6;
    UV_DIRENT_BLOCK = 7;
    EXTENSIONLESS_FORMAT_JAVASCRIPT = 0;
    EXTENSIONLESS_FORMAT_WASM = 1;
    S_IFMT = 61440;
    S_IFREG = 32768;
    S_IFDIR = 16384;
    S_IFCHR = 8192;
    S_IFBLK = 24576;
    S_IFIFO = 4096;
    S_IFLNK = 40960;
    S_IFSOCK = 49152;
    O_CREAT = 64;
    O_EXCL = 128;
    UV_FS_O_FILEMAP = 0;
    O_NOCTTY = 256;
    O_TRUNC = 512;
    O_APPEND = 1024;
    O_DIRECTORY = 65536;
    O_NOATIME = 262144;
    O_NOFOLLOW = 131072;
    O_SYNC = 1052672;
    O_DSYNC = 4096;
    O_DIRECT = 16384;
    O_NONBLOCK = 2048;
    S_IRWXU = 448;
    S_IRUSR = 256;
    S_IWUSR = 128;
    S_IXUSR = 64;
    S_IRWXG = 56;
    S_IRGRP = 32;
    S_IWGRP = 16;
    S_IXGRP = 8;
    S_IRWXO = 7;
    S_IROTH = 4;
    S_IWOTH = 2;
    S_IXOTH = 1;
    F_OK = 0;
    R_OK = 4;
    W_OK = 2;
    X_OK = 1;
    UV_FS_COPYFILE_EXCL = 1;
    COPYFILE_EXCL = 1;
    UV_FS_COPYFILE_FICLONE = 2;
    COPYFILE_FICLONE = 2;
    UV_FS_COPYFILE_FICLONE_FORCE = 4;
    COPYFILE_FICLONE_FORCE = 4;
  }
});

// ../../../Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/fs/promises.mjs
var promises_default;
var init_promises2 = __esm({
  "../../../Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/fs/promises.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_promises();
    init_constants();
    init_promises();
    promises_default = {
      constants: constants_exports,
      access,
      appendFile,
      chmod,
      chown,
      copyFile,
      cp,
      glob,
      lchmod,
      lchown,
      link,
      lstat,
      lutimes,
      mkdir,
      mkdtemp,
      open,
      opendir,
      readFile,
      readdir,
      readlink,
      realpath,
      rename,
      rm,
      rmdir,
      stat,
      statfs,
      symlink,
      truncate,
      unlink,
      utimes,
      watch,
      writeFile
    };
  }
});

// ../../../Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/fs/classes.mjs
var Dir, Dirent, Stats, ReadStream2, WriteStream2, FileReadStream, FileWriteStream;
var init_classes = __esm({
  "../../../Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/fs/classes.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    Dir = /* @__PURE__ */ notImplementedClass("fs.Dir");
    Dirent = /* @__PURE__ */ notImplementedClass("fs.Dirent");
    Stats = /* @__PURE__ */ notImplementedClass("fs.Stats");
    ReadStream2 = /* @__PURE__ */ notImplementedClass("fs.ReadStream");
    WriteStream2 = /* @__PURE__ */ notImplementedClass("fs.WriteStream");
    FileReadStream = ReadStream2;
    FileWriteStream = WriteStream2;
  }
});

// ../../../Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/fs/fs.mjs
function callbackify(fn) {
  const fnc = /* @__PURE__ */ __name(function(...args) {
    const cb = args.pop();
    fn().catch((error3) => cb(error3)).then((val) => cb(void 0, val));
  }, "fnc");
  fnc.__promisify__ = fn;
  fnc.native = fnc;
  return fnc;
}
var access2, appendFile2, chown2, chmod2, copyFile2, cp2, lchown2, lchmod2, link2, lstat2, lutimes2, mkdir2, mkdtemp2, realpath2, open2, opendir2, readdir2, readFile2, readlink2, rename2, rm2, rmdir2, stat2, symlink2, truncate2, unlink2, utimes2, writeFile2, statfs2, close, createReadStream, createWriteStream, exists, fchown, fchmod, fdatasync, fstat, fsync, ftruncate, futimes, lstatSync, read, readv, realpathSync, statSync, unwatchFile, watch2, watchFile, write, writev, _toUnixTimestamp, openAsBlob, glob2, appendFileSync, accessSync, chownSync, chmodSync, closeSync, copyFileSync, cpSync, existsSync, fchownSync, fchmodSync, fdatasyncSync, fstatSync, fsyncSync, ftruncateSync, futimesSync, lchownSync, lchmodSync, linkSync, lutimesSync, mkdirSync, mkdtempSync, openSync, opendirSync, readdirSync, readSync, readvSync, readFileSync, readlinkSync, renameSync, rmSync, rmdirSync, symlinkSync, truncateSync, unlinkSync, utimesSync, writeFileSync, writeSync, writevSync, statfsSync, globSync;
var init_fs = __esm({
  "../../../Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/fs/fs.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    init_promises();
    __name(callbackify, "callbackify");
    access2 = callbackify(access);
    appendFile2 = callbackify(appendFile);
    chown2 = callbackify(chown);
    chmod2 = callbackify(chmod);
    copyFile2 = callbackify(copyFile);
    cp2 = callbackify(cp);
    lchown2 = callbackify(lchown);
    lchmod2 = callbackify(lchmod);
    link2 = callbackify(link);
    lstat2 = callbackify(lstat);
    lutimes2 = callbackify(lutimes);
    mkdir2 = callbackify(mkdir);
    mkdtemp2 = callbackify(mkdtemp);
    realpath2 = callbackify(realpath);
    open2 = callbackify(open);
    opendir2 = callbackify(opendir);
    readdir2 = callbackify(readdir);
    readFile2 = callbackify(readFile);
    readlink2 = callbackify(readlink);
    rename2 = callbackify(rename);
    rm2 = callbackify(rm);
    rmdir2 = callbackify(rmdir);
    stat2 = callbackify(stat);
    symlink2 = callbackify(symlink);
    truncate2 = callbackify(truncate);
    unlink2 = callbackify(unlink);
    utimes2 = callbackify(utimes);
    writeFile2 = callbackify(writeFile);
    statfs2 = callbackify(statfs);
    close = /* @__PURE__ */ notImplementedAsync("fs.close");
    createReadStream = /* @__PURE__ */ notImplementedAsync("fs.createReadStream");
    createWriteStream = /* @__PURE__ */ notImplementedAsync("fs.createWriteStream");
    exists = /* @__PURE__ */ notImplementedAsync("fs.exists");
    fchown = /* @__PURE__ */ notImplementedAsync("fs.fchown");
    fchmod = /* @__PURE__ */ notImplementedAsync("fs.fchmod");
    fdatasync = /* @__PURE__ */ notImplementedAsync("fs.fdatasync");
    fstat = /* @__PURE__ */ notImplementedAsync("fs.fstat");
    fsync = /* @__PURE__ */ notImplementedAsync("fs.fsync");
    ftruncate = /* @__PURE__ */ notImplementedAsync("fs.ftruncate");
    futimes = /* @__PURE__ */ notImplementedAsync("fs.futimes");
    lstatSync = /* @__PURE__ */ notImplementedAsync("fs.lstatSync");
    read = /* @__PURE__ */ notImplementedAsync("fs.read");
    readv = /* @__PURE__ */ notImplementedAsync("fs.readv");
    realpathSync = /* @__PURE__ */ notImplementedAsync("fs.realpathSync");
    statSync = /* @__PURE__ */ notImplementedAsync("fs.statSync");
    unwatchFile = /* @__PURE__ */ notImplementedAsync("fs.unwatchFile");
    watch2 = /* @__PURE__ */ notImplementedAsync("fs.watch");
    watchFile = /* @__PURE__ */ notImplementedAsync("fs.watchFile");
    write = /* @__PURE__ */ notImplementedAsync("fs.write");
    writev = /* @__PURE__ */ notImplementedAsync("fs.writev");
    _toUnixTimestamp = /* @__PURE__ */ notImplementedAsync("fs._toUnixTimestamp");
    openAsBlob = /* @__PURE__ */ notImplementedAsync("fs.openAsBlob");
    glob2 = /* @__PURE__ */ notImplementedAsync("fs.glob");
    appendFileSync = /* @__PURE__ */ notImplemented("fs.appendFileSync");
    accessSync = /* @__PURE__ */ notImplemented("fs.accessSync");
    chownSync = /* @__PURE__ */ notImplemented("fs.chownSync");
    chmodSync = /* @__PURE__ */ notImplemented("fs.chmodSync");
    closeSync = /* @__PURE__ */ notImplemented("fs.closeSync");
    copyFileSync = /* @__PURE__ */ notImplemented("fs.copyFileSync");
    cpSync = /* @__PURE__ */ notImplemented("fs.cpSync");
    existsSync = /* @__PURE__ */ __name(() => false, "existsSync");
    fchownSync = /* @__PURE__ */ notImplemented("fs.fchownSync");
    fchmodSync = /* @__PURE__ */ notImplemented("fs.fchmodSync");
    fdatasyncSync = /* @__PURE__ */ notImplemented("fs.fdatasyncSync");
    fstatSync = /* @__PURE__ */ notImplemented("fs.fstatSync");
    fsyncSync = /* @__PURE__ */ notImplemented("fs.fsyncSync");
    ftruncateSync = /* @__PURE__ */ notImplemented("fs.ftruncateSync");
    futimesSync = /* @__PURE__ */ notImplemented("fs.futimesSync");
    lchownSync = /* @__PURE__ */ notImplemented("fs.lchownSync");
    lchmodSync = /* @__PURE__ */ notImplemented("fs.lchmodSync");
    linkSync = /* @__PURE__ */ notImplemented("fs.linkSync");
    lutimesSync = /* @__PURE__ */ notImplemented("fs.lutimesSync");
    mkdirSync = /* @__PURE__ */ notImplemented("fs.mkdirSync");
    mkdtempSync = /* @__PURE__ */ notImplemented("fs.mkdtempSync");
    openSync = /* @__PURE__ */ notImplemented("fs.openSync");
    opendirSync = /* @__PURE__ */ notImplemented("fs.opendirSync");
    readdirSync = /* @__PURE__ */ notImplemented("fs.readdirSync");
    readSync = /* @__PURE__ */ notImplemented("fs.readSync");
    readvSync = /* @__PURE__ */ notImplemented("fs.readvSync");
    readFileSync = /* @__PURE__ */ notImplemented("fs.readFileSync");
    readlinkSync = /* @__PURE__ */ notImplemented("fs.readlinkSync");
    renameSync = /* @__PURE__ */ notImplemented("fs.renameSync");
    rmSync = /* @__PURE__ */ notImplemented("fs.rmSync");
    rmdirSync = /* @__PURE__ */ notImplemented("fs.rmdirSync");
    symlinkSync = /* @__PURE__ */ notImplemented("fs.symlinkSync");
    truncateSync = /* @__PURE__ */ notImplemented("fs.truncateSync");
    unlinkSync = /* @__PURE__ */ notImplemented("fs.unlinkSync");
    utimesSync = /* @__PURE__ */ notImplemented("fs.utimesSync");
    writeFileSync = /* @__PURE__ */ notImplemented("fs.writeFileSync");
    writeSync = /* @__PURE__ */ notImplemented("fs.writeSync");
    writevSync = /* @__PURE__ */ notImplemented("fs.writevSync");
    statfsSync = /* @__PURE__ */ notImplemented("fs.statfsSync");
    globSync = /* @__PURE__ */ notImplemented("fs.globSync");
  }
});

// ../../../Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/fs.mjs
var fs_default;
var init_fs2 = __esm({
  "../../../Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/fs.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_promises2();
    init_classes();
    init_fs();
    init_constants();
    init_constants();
    init_fs();
    init_classes();
    fs_default = {
      F_OK,
      R_OK,
      W_OK,
      X_OK,
      constants: constants_exports,
      promises: promises_default,
      Dir,
      Dirent,
      FileReadStream,
      FileWriteStream,
      ReadStream: ReadStream2,
      Stats,
      WriteStream: WriteStream2,
      _toUnixTimestamp,
      access: access2,
      accessSync,
      appendFile: appendFile2,
      appendFileSync,
      chmod: chmod2,
      chmodSync,
      chown: chown2,
      chownSync,
      close,
      closeSync,
      copyFile: copyFile2,
      copyFileSync,
      cp: cp2,
      cpSync,
      createReadStream,
      createWriteStream,
      exists,
      existsSync,
      fchmod,
      fchmodSync,
      fchown,
      fchownSync,
      fdatasync,
      fdatasyncSync,
      fstat,
      fstatSync,
      fsync,
      fsyncSync,
      ftruncate,
      ftruncateSync,
      futimes,
      futimesSync,
      glob: glob2,
      lchmod: lchmod2,
      globSync,
      lchmodSync,
      lchown: lchown2,
      lchownSync,
      link: link2,
      linkSync,
      lstat: lstat2,
      lstatSync,
      lutimes: lutimes2,
      lutimesSync,
      mkdir: mkdir2,
      mkdirSync,
      mkdtemp: mkdtemp2,
      mkdtempSync,
      open: open2,
      openAsBlob,
      openSync,
      opendir: opendir2,
      opendirSync,
      read,
      readFile: readFile2,
      readFileSync,
      readSync,
      readdir: readdir2,
      readdirSync,
      readlink: readlink2,
      readlinkSync,
      readv,
      readvSync,
      realpath: realpath2,
      realpathSync,
      rename: rename2,
      renameSync,
      rm: rm2,
      rmSync,
      rmdir: rmdir2,
      rmdirSync,
      stat: stat2,
      statSync,
      statfs: statfs2,
      statfsSync,
      symlink: symlink2,
      symlinkSync,
      truncate: truncate2,
      truncateSync,
      unlink: unlink2,
      unlinkSync,
      unwatchFile,
      utimes: utimes2,
      utimesSync,
      watch: watch2,
      watchFile,
      write,
      writeFile: writeFile2,
      writeFileSync,
      writeSync,
      writev,
      writevSync
    };
  }
});

// node-built-in-modules:fs
var require_fs = __commonJS({
  "node-built-in-modules:fs"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_fs2();
    module.exports = fs_default;
  }
});

// node-built-in-modules:path
import libDefault from "path";
var require_path = __commonJS({
  "node-built-in-modules:path"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = libDefault;
  }
});

// ../../../Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/os/constants.mjs
var UV_UDP_REUSEADDR, dlopen2, errno, signals, priority;
var init_constants2 = __esm({
  "../../../Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/os/constants.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    UV_UDP_REUSEADDR = 4;
    dlopen2 = {
      RTLD_LAZY: 1,
      RTLD_NOW: 2,
      RTLD_GLOBAL: 256,
      RTLD_LOCAL: 0,
      RTLD_DEEPBIND: 8
    };
    errno = {
      E2BIG: 7,
      EACCES: 13,
      EADDRINUSE: 98,
      EADDRNOTAVAIL: 99,
      EAFNOSUPPORT: 97,
      EAGAIN: 11,
      EALREADY: 114,
      EBADF: 9,
      EBADMSG: 74,
      EBUSY: 16,
      ECANCELED: 125,
      ECHILD: 10,
      ECONNABORTED: 103,
      ECONNREFUSED: 111,
      ECONNRESET: 104,
      EDEADLK: 35,
      EDESTADDRREQ: 89,
      EDOM: 33,
      EDQUOT: 122,
      EEXIST: 17,
      EFAULT: 14,
      EFBIG: 27,
      EHOSTUNREACH: 113,
      EIDRM: 43,
      EILSEQ: 84,
      EINPROGRESS: 115,
      EINTR: 4,
      EINVAL: 22,
      EIO: 5,
      EISCONN: 106,
      EISDIR: 21,
      ELOOP: 40,
      EMFILE: 24,
      EMLINK: 31,
      EMSGSIZE: 90,
      EMULTIHOP: 72,
      ENAMETOOLONG: 36,
      ENETDOWN: 100,
      ENETRESET: 102,
      ENETUNREACH: 101,
      ENFILE: 23,
      ENOBUFS: 105,
      ENODATA: 61,
      ENODEV: 19,
      ENOENT: 2,
      ENOEXEC: 8,
      ENOLCK: 37,
      ENOLINK: 67,
      ENOMEM: 12,
      ENOMSG: 42,
      ENOPROTOOPT: 92,
      ENOSPC: 28,
      ENOSR: 63,
      ENOSTR: 60,
      ENOSYS: 38,
      ENOTCONN: 107,
      ENOTDIR: 20,
      ENOTEMPTY: 39,
      ENOTSOCK: 88,
      ENOTSUP: 95,
      ENOTTY: 25,
      ENXIO: 6,
      EOPNOTSUPP: 95,
      EOVERFLOW: 75,
      EPERM: 1,
      EPIPE: 32,
      EPROTO: 71,
      EPROTONOSUPPORT: 93,
      EPROTOTYPE: 91,
      ERANGE: 34,
      EROFS: 30,
      ESPIPE: 29,
      ESRCH: 3,
      ESTALE: 116,
      ETIME: 62,
      ETIMEDOUT: 110,
      ETXTBSY: 26,
      EWOULDBLOCK: 11,
      EXDEV: 18
    };
    signals = {
      SIGHUP: 1,
      SIGINT: 2,
      SIGQUIT: 3,
      SIGILL: 4,
      SIGTRAP: 5,
      SIGABRT: 6,
      SIGIOT: 6,
      SIGBUS: 7,
      SIGFPE: 8,
      SIGKILL: 9,
      SIGUSR1: 10,
      SIGSEGV: 11,
      SIGUSR2: 12,
      SIGPIPE: 13,
      SIGALRM: 14,
      SIGTERM: 15,
      SIGCHLD: 17,
      SIGSTKFLT: 16,
      SIGCONT: 18,
      SIGSTOP: 19,
      SIGTSTP: 20,
      SIGTTIN: 21,
      SIGTTOU: 22,
      SIGURG: 23,
      SIGXCPU: 24,
      SIGXFSZ: 25,
      SIGVTALRM: 26,
      SIGPROF: 27,
      SIGWINCH: 28,
      SIGIO: 29,
      SIGPOLL: 29,
      SIGPWR: 30,
      SIGSYS: 31
    };
    priority = {
      PRIORITY_LOW: 19,
      PRIORITY_BELOW_NORMAL: 10,
      PRIORITY_NORMAL: 0,
      PRIORITY_ABOVE_NORMAL: -7,
      PRIORITY_HIGH: -14,
      PRIORITY_HIGHEST: -20
    };
  }
});

// ../../../Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/os.mjs
var constants, NUM_CPUS, availableParallelism, arch2, machine, endianness, cpus, getPriority, setPriority, homedir, tmpdir, devNull, freemem, totalmem, loadavg, uptime2, hostname, networkInterfaces, platform2, type, release2, version2, userInfo, EOL, os_default;
var init_os = __esm({
  "../../../Roaming/npm/node_modules/wrangler/node_modules/unenv/dist/runtime/node/os.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    init_constants2();
    constants = {
      UV_UDP_REUSEADDR,
      dlopen: dlopen2,
      errno,
      signals,
      priority
    };
    NUM_CPUS = 8;
    availableParallelism = /* @__PURE__ */ __name(() => NUM_CPUS, "availableParallelism");
    arch2 = /* @__PURE__ */ __name(() => "", "arch");
    machine = /* @__PURE__ */ __name(() => "", "machine");
    endianness = /* @__PURE__ */ __name(() => "LE", "endianness");
    cpus = /* @__PURE__ */ __name(() => {
      const info3 = {
        model: "",
        speed: 0,
        times: {
          user: 0,
          nice: 0,
          sys: 0,
          idle: 0,
          irq: 0
        }
      };
      return Array.from({ length: NUM_CPUS }, () => info3);
    }, "cpus");
    getPriority = /* @__PURE__ */ __name(() => 0, "getPriority");
    setPriority = /* @__PURE__ */ notImplemented("os.setPriority");
    homedir = /* @__PURE__ */ __name(() => "/", "homedir");
    tmpdir = /* @__PURE__ */ __name(() => "/tmp", "tmpdir");
    devNull = "/dev/null";
    freemem = /* @__PURE__ */ __name(() => 0, "freemem");
    totalmem = /* @__PURE__ */ __name(() => 0, "totalmem");
    loadavg = /* @__PURE__ */ __name(() => [
      0,
      0,
      0
    ], "loadavg");
    uptime2 = /* @__PURE__ */ __name(() => 0, "uptime");
    hostname = /* @__PURE__ */ __name(() => "", "hostname");
    networkInterfaces = /* @__PURE__ */ __name(() => {
      return { lo0: [
        {
          address: "127.0.0.1",
          netmask: "255.0.0.0",
          family: "IPv4",
          mac: "00:00:00:00:00:00",
          internal: true,
          cidr: "127.0.0.1/8"
        },
        {
          address: "::1",
          netmask: "ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff",
          family: "IPv6",
          mac: "00:00:00:00:00:00",
          internal: true,
          cidr: "::1/128",
          scopeid: 0
        },
        {
          address: "fe80::1",
          netmask: "ffff:ffff:ffff:ffff::",
          family: "IPv6",
          mac: "00:00:00:00:00:00",
          internal: true,
          cidr: "fe80::1/64",
          scopeid: 1
        }
      ] };
    }, "networkInterfaces");
    platform2 = /* @__PURE__ */ __name(() => "linux", "platform");
    type = /* @__PURE__ */ __name(() => "Linux", "type");
    release2 = /* @__PURE__ */ __name(() => "", "release");
    version2 = /* @__PURE__ */ __name(() => "", "version");
    userInfo = /* @__PURE__ */ __name((opts) => {
      const encode = /* @__PURE__ */ __name((str) => {
        if (opts?.encoding) {
          const buff = Buffer.from(str);
          return opts.encoding === "buffer" ? buff : buff.toString(opts.encoding);
        }
        return str;
      }, "encode");
      return {
        gid: 1e3,
        uid: 1e3,
        homedir: encode("/"),
        shell: encode("/bin/sh"),
        username: encode("root")
      };
    }, "userInfo");
    EOL = "\n";
    os_default = {
      arch: arch2,
      availableParallelism,
      constants,
      cpus,
      EOL,
      endianness,
      devNull,
      freemem,
      getPriority,
      homedir,
      hostname,
      loadavg,
      machine,
      networkInterfaces,
      platform: platform2,
      release: release2,
      setPriority,
      tmpdir,
      totalmem,
      type,
      uptime: uptime2,
      userInfo,
      version: version2
    };
  }
});

// node-built-in-modules:os
var require_os = __commonJS({
  "node-built-in-modules:os"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_os();
    module.exports = os_default;
  }
});

// node-built-in-modules:crypto
import libDefault2 from "crypto";
var require_crypto = __commonJS({
  "node-built-in-modules:crypto"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = libDefault2;
  }
});

// node_modules/dotenv/package.json
var require_package = __commonJS({
  "node_modules/dotenv/package.json"(exports, module) {
    module.exports = {
      name: "dotenv",
      version: "17.2.3",
      description: "Loads environment variables from .env file",
      main: "lib/main.js",
      types: "lib/main.d.ts",
      exports: {
        ".": {
          types: "./lib/main.d.ts",
          require: "./lib/main.js",
          default: "./lib/main.js"
        },
        "./config": "./config.js",
        "./config.js": "./config.js",
        "./lib/env-options": "./lib/env-options.js",
        "./lib/env-options.js": "./lib/env-options.js",
        "./lib/cli-options": "./lib/cli-options.js",
        "./lib/cli-options.js": "./lib/cli-options.js",
        "./package.json": "./package.json"
      },
      scripts: {
        "dts-check": "tsc --project tests/types/tsconfig.json",
        lint: "standard",
        pretest: "npm run lint && npm run dts-check",
        test: "tap run tests/**/*.js --allow-empty-coverage --disable-coverage --timeout=60000",
        "test:coverage": "tap run tests/**/*.js --show-full-coverage --timeout=60000 --coverage-report=text --coverage-report=lcov",
        prerelease: "npm test",
        release: "standard-version"
      },
      repository: {
        type: "git",
        url: "git://github.com/motdotla/dotenv.git"
      },
      homepage: "https://github.com/motdotla/dotenv#readme",
      funding: "https://dotenvx.com",
      keywords: [
        "dotenv",
        "env",
        ".env",
        "environment",
        "variables",
        "config",
        "settings"
      ],
      readmeFilename: "README.md",
      license: "BSD-2-Clause",
      devDependencies: {
        "@types/node": "^18.11.3",
        decache: "^4.6.2",
        sinon: "^14.0.1",
        standard: "^17.0.0",
        "standard-version": "^9.5.0",
        tap: "^19.2.0",
        typescript: "^4.8.4"
      },
      engines: {
        node: ">=12"
      },
      browser: {
        fs: false
      }
    };
  }
});

// node_modules/dotenv/lib/main.js
var require_main = __commonJS({
  "node_modules/dotenv/lib/main.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var fs = require_fs();
    var path = require_path();
    var os = require_os();
    var crypto = require_crypto();
    var packageJson = require_package();
    var version3 = packageJson.version;
    var TIPS = [
      "\u{1F510} encrypt with Dotenvx: https://dotenvx.com",
      "\u{1F510} prevent committing .env to code: https://dotenvx.com/precommit",
      "\u{1F510} prevent building .env in docker: https://dotenvx.com/prebuild",
      "\u{1F4E1} add observability to secrets: https://dotenvx.com/ops",
      "\u{1F465} sync secrets across teammates & machines: https://dotenvx.com/ops",
      "\u{1F5C2}\uFE0F backup and recover secrets: https://dotenvx.com/ops",
      "\u2705 audit secrets and track compliance: https://dotenvx.com/ops",
      "\u{1F504} add secrets lifecycle management: https://dotenvx.com/ops",
      "\u{1F511} add access controls to secrets: https://dotenvx.com/ops",
      "\u{1F6E0}\uFE0F  run anywhere with `dotenvx run -- yourcommand`",
      "\u2699\uFE0F  specify custom .env file path with { path: '/custom/path/.env' }",
      "\u2699\uFE0F  enable debug logging with { debug: true }",
      "\u2699\uFE0F  override existing env vars with { override: true }",
      "\u2699\uFE0F  suppress all logs with { quiet: true }",
      "\u2699\uFE0F  write to custom object with { processEnv: myObject }",
      "\u2699\uFE0F  load multiple .env files with { path: ['.env.local', '.env'] }"
    ];
    function _getRandomTip() {
      return TIPS[Math.floor(Math.random() * TIPS.length)];
    }
    __name(_getRandomTip, "_getRandomTip");
    function parseBoolean2(value) {
      if (typeof value === "string") {
        return !["false", "0", "no", "off", ""].includes(value.toLowerCase());
      }
      return Boolean(value);
    }
    __name(parseBoolean2, "parseBoolean");
    function supportsAnsi() {
      return process.stdout.isTTY;
    }
    __name(supportsAnsi, "supportsAnsi");
    function dim(text) {
      return supportsAnsi() ? `\x1B[2m${text}\x1B[0m` : text;
    }
    __name(dim, "dim");
    var LINE = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;
    function parse(src) {
      const obj = {};
      let lines = src.toString();
      lines = lines.replace(/\r\n?/mg, "\n");
      let match;
      while ((match = LINE.exec(lines)) != null) {
        const key = match[1];
        let value = match[2] || "";
        value = value.trim();
        const maybeQuote = value[0];
        value = value.replace(/^(['"`])([\s\S]*)\1$/mg, "$2");
        if (maybeQuote === '"') {
          value = value.replace(/\\n/g, "\n");
          value = value.replace(/\\r/g, "\r");
        }
        obj[key] = value;
      }
      return obj;
    }
    __name(parse, "parse");
    function _parseVault(options) {
      options = options || {};
      const vaultPath = _vaultPath(options);
      options.path = vaultPath;
      const result = DotenvModule.configDotenv(options);
      if (!result.parsed) {
        const err = new Error(`MISSING_DATA: Cannot parse ${vaultPath} for an unknown reason`);
        err.code = "MISSING_DATA";
        throw err;
      }
      const keys = _dotenvKey(options).split(",");
      const length = keys.length;
      let decrypted;
      for (let i = 0; i < length; i++) {
        try {
          const key = keys[i].trim();
          const attrs = _instructions(result, key);
          decrypted = DotenvModule.decrypt(attrs.ciphertext, attrs.key);
          break;
        } catch (error3) {
          if (i + 1 >= length) {
            throw error3;
          }
        }
      }
      return DotenvModule.parse(decrypted);
    }
    __name(_parseVault, "_parseVault");
    function _warn(message) {
      console.error(`[dotenv@${version3}][WARN] ${message}`);
    }
    __name(_warn, "_warn");
    function _debug(message) {
      console.log(`[dotenv@${version3}][DEBUG] ${message}`);
    }
    __name(_debug, "_debug");
    function _log(message) {
      console.log(`[dotenv@${version3}] ${message}`);
    }
    __name(_log, "_log");
    function _dotenvKey(options) {
      if (options && options.DOTENV_KEY && options.DOTENV_KEY.length > 0) {
        return options.DOTENV_KEY;
      }
      if (process.env.DOTENV_KEY && process.env.DOTENV_KEY.length > 0) {
        return process.env.DOTENV_KEY;
      }
      return "";
    }
    __name(_dotenvKey, "_dotenvKey");
    function _instructions(result, dotenvKey) {
      let uri;
      try {
        uri = new URL(dotenvKey);
      } catch (error3) {
        if (error3.code === "ERR_INVALID_URL") {
          const err = new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");
          err.code = "INVALID_DOTENV_KEY";
          throw err;
        }
        throw error3;
      }
      const key = uri.password;
      if (!key) {
        const err = new Error("INVALID_DOTENV_KEY: Missing key part");
        err.code = "INVALID_DOTENV_KEY";
        throw err;
      }
      const environment = uri.searchParams.get("environment");
      if (!environment) {
        const err = new Error("INVALID_DOTENV_KEY: Missing environment part");
        err.code = "INVALID_DOTENV_KEY";
        throw err;
      }
      const environmentKey = `DOTENV_VAULT_${environment.toUpperCase()}`;
      const ciphertext = result.parsed[environmentKey];
      if (!ciphertext) {
        const err = new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${environmentKey} in your .env.vault file.`);
        err.code = "NOT_FOUND_DOTENV_ENVIRONMENT";
        throw err;
      }
      return { ciphertext, key };
    }
    __name(_instructions, "_instructions");
    function _vaultPath(options) {
      let possibleVaultPath = null;
      if (options && options.path && options.path.length > 0) {
        if (Array.isArray(options.path)) {
          for (const filepath of options.path) {
            if (fs.existsSync(filepath)) {
              possibleVaultPath = filepath.endsWith(".vault") ? filepath : `${filepath}.vault`;
            }
          }
        } else {
          possibleVaultPath = options.path.endsWith(".vault") ? options.path : `${options.path}.vault`;
        }
      } else {
        possibleVaultPath = path.resolve(process.cwd(), ".env.vault");
      }
      if (fs.existsSync(possibleVaultPath)) {
        return possibleVaultPath;
      }
      return null;
    }
    __name(_vaultPath, "_vaultPath");
    function _resolveHome(envPath) {
      return envPath[0] === "~" ? path.join(os.homedir(), envPath.slice(1)) : envPath;
    }
    __name(_resolveHome, "_resolveHome");
    function _configVault(options) {
      const debug3 = parseBoolean2(process.env.DOTENV_CONFIG_DEBUG || options && options.debug);
      const quiet = parseBoolean2(process.env.DOTENV_CONFIG_QUIET || options && options.quiet);
      if (debug3 || !quiet) {
        _log("Loading env from encrypted .env.vault");
      }
      const parsed = DotenvModule._parseVault(options);
      let processEnv = process.env;
      if (options && options.processEnv != null) {
        processEnv = options.processEnv;
      }
      DotenvModule.populate(processEnv, parsed, options);
      return { parsed };
    }
    __name(_configVault, "_configVault");
    function configDotenv(options) {
      const dotenvPath = path.resolve(process.cwd(), ".env");
      let encoding = "utf8";
      let processEnv = process.env;
      if (options && options.processEnv != null) {
        processEnv = options.processEnv;
      }
      let debug3 = parseBoolean2(processEnv.DOTENV_CONFIG_DEBUG || options && options.debug);
      let quiet = parseBoolean2(processEnv.DOTENV_CONFIG_QUIET || options && options.quiet);
      if (options && options.encoding) {
        encoding = options.encoding;
      } else {
        if (debug3) {
          _debug("No encoding is specified. UTF-8 is used by default");
        }
      }
      let optionPaths = [dotenvPath];
      if (options && options.path) {
        if (!Array.isArray(options.path)) {
          optionPaths = [_resolveHome(options.path)];
        } else {
          optionPaths = [];
          for (const filepath of options.path) {
            optionPaths.push(_resolveHome(filepath));
          }
        }
      }
      let lastError;
      const parsedAll = {};
      for (const path2 of optionPaths) {
        try {
          const parsed = DotenvModule.parse(fs.readFileSync(path2, { encoding }));
          DotenvModule.populate(parsedAll, parsed, options);
        } catch (e) {
          if (debug3) {
            _debug(`Failed to load ${path2} ${e.message}`);
          }
          lastError = e;
        }
      }
      const populated = DotenvModule.populate(processEnv, parsedAll, options);
      debug3 = parseBoolean2(processEnv.DOTENV_CONFIG_DEBUG || debug3);
      quiet = parseBoolean2(processEnv.DOTENV_CONFIG_QUIET || quiet);
      if (debug3 || !quiet) {
        const keysCount = Object.keys(populated).length;
        const shortPaths = [];
        for (const filePath of optionPaths) {
          try {
            const relative = path.relative(process.cwd(), filePath);
            shortPaths.push(relative);
          } catch (e) {
            if (debug3) {
              _debug(`Failed to load ${filePath} ${e.message}`);
            }
            lastError = e;
          }
        }
        _log(`injecting env (${keysCount}) from ${shortPaths.join(",")} ${dim(`-- tip: ${_getRandomTip()}`)}`);
      }
      if (lastError) {
        return { parsed: parsedAll, error: lastError };
      } else {
        return { parsed: parsedAll };
      }
    }
    __name(configDotenv, "configDotenv");
    function config3(options) {
      if (_dotenvKey(options).length === 0) {
        return DotenvModule.configDotenv(options);
      }
      const vaultPath = _vaultPath(options);
      if (!vaultPath) {
        _warn(`You set DOTENV_KEY but you are missing a .env.vault file at ${vaultPath}. Did you forget to build it?`);
        return DotenvModule.configDotenv(options);
      }
      return DotenvModule._configVault(options);
    }
    __name(config3, "config");
    function decrypt(encrypted, keyStr) {
      const key = Buffer.from(keyStr.slice(-64), "hex");
      let ciphertext = Buffer.from(encrypted, "base64");
      const nonce = ciphertext.subarray(0, 12);
      const authTag = ciphertext.subarray(-16);
      ciphertext = ciphertext.subarray(12, -16);
      try {
        const aesgcm = crypto.createDecipheriv("aes-256-gcm", key, nonce);
        aesgcm.setAuthTag(authTag);
        return `${aesgcm.update(ciphertext)}${aesgcm.final()}`;
      } catch (error3) {
        const isRange = error3 instanceof RangeError;
        const invalidKeyLength = error3.message === "Invalid key length";
        const decryptionFailed = error3.message === "Unsupported state or unable to authenticate data";
        if (isRange || invalidKeyLength) {
          const err = new Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");
          err.code = "INVALID_DOTENV_KEY";
          throw err;
        } else if (decryptionFailed) {
          const err = new Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");
          err.code = "DECRYPTION_FAILED";
          throw err;
        } else {
          throw error3;
        }
      }
    }
    __name(decrypt, "decrypt");
    function populate(processEnv, parsed, options = {}) {
      const debug3 = Boolean(options && options.debug);
      const override = Boolean(options && options.override);
      const populated = {};
      if (typeof parsed !== "object") {
        const err = new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");
        err.code = "OBJECT_REQUIRED";
        throw err;
      }
      for (const key of Object.keys(parsed)) {
        if (Object.prototype.hasOwnProperty.call(processEnv, key)) {
          if (override === true) {
            processEnv[key] = parsed[key];
            populated[key] = parsed[key];
          }
          if (debug3) {
            if (override === true) {
              _debug(`"${key}" is already defined and WAS overwritten`);
            } else {
              _debug(`"${key}" is already defined and was NOT overwritten`);
            }
          }
        } else {
          processEnv[key] = parsed[key];
          populated[key] = parsed[key];
        }
      }
      return populated;
    }
    __name(populate, "populate");
    var DotenvModule = {
      configDotenv,
      _configVault,
      _parseVault,
      config: config3,
      decrypt,
      parse,
      populate
    };
    module.exports.configDotenv = DotenvModule.configDotenv;
    module.exports._configVault = DotenvModule._configVault;
    module.exports._parseVault = DotenvModule._parseVault;
    module.exports.config = DotenvModule.config;
    module.exports.decrypt = DotenvModule.decrypt;
    module.exports.parse = DotenvModule.parse;
    module.exports.populate = DotenvModule.populate;
    module.exports = DotenvModule;
  }
});

// .wrangler/tmp/bundle-lIlnvp/middleware-loader.entry.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// .wrangler/tmp/bundle-lIlnvp/middleware-insertion-facade.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// worker/cf-worker-entry.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// worker/vercel-adapter.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function adaptVercelHandler(handler) {
  return async (request2, env2) => {
    if (env2 && typeof env2 === "object") {
      for (const [key, value] of Object.entries(env2)) {
        if (typeof value === "string") {
          process.env[key] = value;
        }
      }
    }
    const url = new URL(request2.url);
    const req = {
      query: Object.fromEntries(url.searchParams),
      method: request2.method,
      url: request2.url
    };
    let statusCode = 200;
    const responseHeaders = new Headers();
    let body = "";
    let settled = false;
    const res = {
      /**
       * @param {string} key
       * @param {string | string[]} value
       */
      setHeader(key, value) {
        if (Array.isArray(value)) {
          responseHeaders.delete(key);
          for (const v of value) {
            responseHeaders.append(key, v);
          }
        } else {
          responseHeaders.set(key, value);
        }
      },
      /**
       * @param {number} code
       * @returns {typeof res}
       */
      status(code) {
        statusCode = code;
        return res;
      },
      /**
       * @param {string} data
       */
      send(data) {
        if (!settled) {
          body = data ?? "";
          settled = true;
        }
        return res;
      }
    };
    try {
      await handler(req, res);
    } catch (err) {
      console.error("[worker] Unhandled handler error:", err);
      return new Response("Internal Server Error", { status: 500 });
    }
    return new Response(body, {
      status: statusCode,
      headers: responseHeaders
    });
  };
}
__name(adaptVercelHandler, "adaptVercelHandler");

// api/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// src/cards/stats.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// src/common/Card.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// src/common/html.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var encodeHTML = /* @__PURE__ */ __name((str) => {
  return str.replace(/[\u00A0-\u9999<>&](?!#)/gim, (i) => {
    return "&#" + i.charCodeAt(0) + ";";
  }).replace(/\u0008/gim, "");
}, "encodeHTML");

// src/common/render.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// src/common/error.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var TRY_AGAIN_LATER = "Please try again later";
var SECONDARY_ERROR_MESSAGES = {
  MAX_RETRY: "You can deploy own instance or wait until public will be no longer limited",
  NO_TOKENS: "Please add an env variable called PAT_1 with your GitHub API token in vercel",
  USER_NOT_FOUND: "Make sure the provided username is not an organization",
  GRAPHQL_ERROR: TRY_AGAIN_LATER,
  GITHUB_REST_API_ERROR: TRY_AGAIN_LATER,
  WAKATIME_USER_NOT_FOUND: "Make sure you have a public WakaTime profile"
};
var CustomError = class extends Error {
  static {
    __name(this, "CustomError");
  }
  /**
   * Custom error constructor.
   *
   * @param {string} message Error message.
   * @param {string} type Error type.
   */
  constructor(message, type2) {
    super(message);
    this.type = type2;
    this.secondaryMessage = SECONDARY_ERROR_MESSAGES[type2] || type2;
  }
  static MAX_RETRY = "MAX_RETRY";
  static NO_TOKENS = "NO_TOKENS";
  static USER_NOT_FOUND = "USER_NOT_FOUND";
  static GRAPHQL_ERROR = "GRAPHQL_ERROR";
  static GITHUB_REST_API_ERROR = "GITHUB_REST_API_ERROR";
  static WAKATIME_ERROR = "WAKATIME_ERROR";
};
var MissingParamError = class extends Error {
  static {
    __name(this, "MissingParamError");
  }
  /**
   * Missing query parameter error constructor.
   *
   * @param {string[]} missedParams An array of missing parameters names.
   * @param {string=} secondaryMessage Optional secondary message to display.
   */
  constructor(missedParams, secondaryMessage) {
    const msg = `Missing params ${missedParams.map((p) => `"${p}"`).join(", ")} make sure you pass the parameters in URL`;
    super(msg);
    this.missedParams = missedParams;
    this.secondaryMessage = secondaryMessage;
  }
};
var retrieveSecondaryMessage = /* @__PURE__ */ __name((err) => {
  return "secondaryMessage" in err && typeof err.secondaryMessage === "string" ? err.secondaryMessage : void 0;
}, "retrieveSecondaryMessage");

// src/common/color.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// themes/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var themes = {
  default: {
    title_color: "2f80ed",
    icon_color: "4c71f2",
    text_color: "434d58",
    bg_color: "fffefe",
    border_color: "e4e2e2"
  },
  default_repocard: {
    title_color: "2f80ed",
    icon_color: "586069",
    // icon color is different
    text_color: "434d58",
    bg_color: "fffefe"
  },
  transparent: {
    title_color: "006AFF",
    icon_color: "0579C3",
    text_color: "417E87",
    bg_color: "ffffff00"
  },
  shadow_red: {
    title_color: "9A0000",
    text_color: "444",
    icon_color: "4F0000",
    border_color: "4F0000",
    bg_color: "ffffff00"
  },
  shadow_green: {
    title_color: "007A00",
    text_color: "444",
    icon_color: "003D00",
    border_color: "003D00",
    bg_color: "ffffff00"
  },
  shadow_blue: {
    title_color: "00779A",
    text_color: "444",
    icon_color: "004450",
    border_color: "004490",
    bg_color: "ffffff00"
  },
  dark: {
    title_color: "fff",
    icon_color: "79ff97",
    text_color: "9f9f9f",
    bg_color: "151515"
  },
  radical: {
    title_color: "fe428e",
    icon_color: "f8d847",
    text_color: "a9fef7",
    bg_color: "141321"
  },
  merko: {
    title_color: "abd200",
    icon_color: "b7d364",
    text_color: "68b587",
    bg_color: "0a0f0b"
  },
  gruvbox: {
    title_color: "fabd2f",
    icon_color: "fe8019",
    text_color: "8ec07c",
    bg_color: "282828"
  },
  gruvbox_light: {
    title_color: "b57614",
    icon_color: "af3a03",
    text_color: "427b58",
    bg_color: "fbf1c7"
  },
  tokyonight: {
    title_color: "70a5fd",
    icon_color: "bf91f3",
    text_color: "38bdae",
    bg_color: "1a1b27"
  },
  onedark: {
    title_color: "e4bf7a",
    icon_color: "8eb573",
    text_color: "df6d74",
    bg_color: "282c34"
  },
  cobalt: {
    title_color: "e683d9",
    icon_color: "0480ef",
    text_color: "75eeb2",
    bg_color: "193549"
  },
  synthwave: {
    title_color: "e2e9ec",
    icon_color: "ef8539",
    text_color: "e5289e",
    bg_color: "2b213a"
  },
  highcontrast: {
    title_color: "e7f216",
    icon_color: "00ffff",
    text_color: "fff",
    bg_color: "000"
  },
  dracula: {
    title_color: "ff6e96",
    icon_color: "79dafa",
    text_color: "f8f8f2",
    bg_color: "282a36"
  },
  prussian: {
    title_color: "bddfff",
    icon_color: "38a0ff",
    text_color: "6e93b5",
    bg_color: "172f45"
  },
  monokai: {
    title_color: "eb1f6a",
    icon_color: "e28905",
    text_color: "f1f1eb",
    bg_color: "272822"
  },
  vue: {
    title_color: "41b883",
    icon_color: "41b883",
    text_color: "273849",
    bg_color: "fffefe"
  },
  "vue-dark": {
    title_color: "41b883",
    icon_color: "41b883",
    text_color: "fffefe",
    bg_color: "273849"
  },
  "shades-of-purple": {
    title_color: "fad000",
    icon_color: "b362ff",
    text_color: "a599e9",
    bg_color: "2d2b55"
  },
  nightowl: {
    title_color: "c792ea",
    icon_color: "ffeb95",
    text_color: "7fdbca",
    bg_color: "011627"
  },
  buefy: {
    title_color: "7957d5",
    icon_color: "ff3860",
    text_color: "363636",
    bg_color: "ffffff"
  },
  "blue-green": {
    title_color: "2f97c1",
    icon_color: "f5b700",
    text_color: "0cf574",
    bg_color: "040f0f"
  },
  algolia: {
    title_color: "00AEFF",
    icon_color: "2DDE98",
    text_color: "FFFFFF",
    bg_color: "050F2C"
  },
  "great-gatsby": {
    title_color: "ffa726",
    icon_color: "ffb74d",
    text_color: "ffd95b",
    bg_color: "000000"
  },
  darcula: {
    title_color: "BA5F17",
    icon_color: "84628F",
    text_color: "BEBEBE",
    bg_color: "242424"
  },
  bear: {
    title_color: "e03c8a",
    icon_color: "00AEFF",
    text_color: "bcb28d",
    bg_color: "1f2023"
  },
  "solarized-dark": {
    title_color: "268bd2",
    icon_color: "b58900",
    text_color: "859900",
    bg_color: "002b36"
  },
  "solarized-light": {
    title_color: "268bd2",
    icon_color: "b58900",
    text_color: "859900",
    bg_color: "fdf6e3"
  },
  "chartreuse-dark": {
    title_color: "7fff00",
    icon_color: "00AEFF",
    text_color: "fff",
    bg_color: "000"
  },
  nord: {
    title_color: "81a1c1",
    text_color: "d8dee9",
    icon_color: "88c0d0",
    bg_color: "2e3440"
  },
  gotham: {
    title_color: "2aa889",
    icon_color: "599cab",
    text_color: "99d1ce",
    bg_color: "0c1014"
  },
  "material-palenight": {
    title_color: "c792ea",
    icon_color: "89ddff",
    text_color: "a6accd",
    bg_color: "292d3e"
  },
  graywhite: {
    title_color: "24292e",
    icon_color: "24292e",
    text_color: "24292e",
    bg_color: "ffffff"
  },
  "vision-friendly-dark": {
    title_color: "ffb000",
    icon_color: "785ef0",
    text_color: "ffffff",
    bg_color: "000000"
  },
  "ayu-mirage": {
    title_color: "f4cd7c",
    icon_color: "73d0ff",
    text_color: "c7c8c2",
    bg_color: "1f2430"
  },
  "midnight-purple": {
    title_color: "9745f5",
    icon_color: "9f4bff",
    text_color: "ffffff",
    bg_color: "000000"
  },
  calm: {
    title_color: "e07a5f",
    icon_color: "edae49",
    text_color: "ebcfb2",
    bg_color: "373f51"
  },
  "flag-india": {
    title_color: "ff8f1c",
    icon_color: "250E62",
    text_color: "509E2F",
    bg_color: "ffffff"
  },
  omni: {
    title_color: "FF79C6",
    icon_color: "e7de79",
    text_color: "E1E1E6",
    bg_color: "191622"
  },
  react: {
    title_color: "61dafb",
    icon_color: "61dafb",
    text_color: "ffffff",
    bg_color: "20232a"
  },
  jolly: {
    title_color: "ff64da",
    icon_color: "a960ff",
    text_color: "ffffff",
    bg_color: "291B3E"
  },
  maroongold: {
    title_color: "F7EF8A",
    icon_color: "F7EF8A",
    text_color: "E0AA3E",
    bg_color: "260000"
  },
  yeblu: {
    title_color: "ffff00",
    icon_color: "ffff00",
    text_color: "ffffff",
    bg_color: "002046"
  },
  blueberry: {
    title_color: "82aaff",
    icon_color: "89ddff",
    text_color: "27e8a7",
    bg_color: "242938"
  },
  slateorange: {
    title_color: "faa627",
    icon_color: "faa627",
    text_color: "ffffff",
    bg_color: "36393f"
  },
  kacho_ga: {
    title_color: "bf4a3f",
    icon_color: "a64833",
    text_color: "d9c8a9",
    bg_color: "402b23"
  },
  outrun: {
    title_color: "ffcc00",
    icon_color: "ff1aff",
    text_color: "8080ff",
    bg_color: "141439"
  },
  ocean_dark: {
    title_color: "8957B2",
    icon_color: "FFFFFF",
    text_color: "92D534",
    bg_color: "151A28"
  },
  city_lights: {
    title_color: "5D8CB3",
    icon_color: "4798FF",
    text_color: "718CA1",
    bg_color: "1D252C"
  },
  github_dark: {
    title_color: "58A6FF",
    icon_color: "1F6FEB",
    text_color: "C3D1D9",
    bg_color: "0D1117"
  },
  github_dark_dimmed: {
    title_color: "539bf5",
    icon_color: "539bf5",
    text_color: "ADBAC7",
    bg_color: "24292F",
    border_color: "373E47"
  },
  discord_old_blurple: {
    title_color: "7289DA",
    icon_color: "7289DA",
    text_color: "FFFFFF",
    bg_color: "2C2F33"
  },
  aura_dark: {
    title_color: "ff7372",
    icon_color: "6cffd0",
    text_color: "dbdbdb",
    bg_color: "252334"
  },
  panda: {
    title_color: "19f9d899",
    icon_color: "19f9d899",
    text_color: "FF75B5",
    bg_color: "31353a"
  },
  noctis_minimus: {
    title_color: "d3b692",
    icon_color: "72b7c0",
    text_color: "c5cdd3",
    bg_color: "1b2932"
  },
  cobalt2: {
    title_color: "ffc600",
    icon_color: "ffffff",
    text_color: "0088ff",
    bg_color: "193549"
  },
  swift: {
    title_color: "000000",
    icon_color: "f05237",
    text_color: "000000",
    bg_color: "f7f7f7"
  },
  aura: {
    title_color: "a277ff",
    icon_color: "ffca85",
    text_color: "61ffca",
    bg_color: "15141b"
  },
  apprentice: {
    title_color: "ffffff",
    icon_color: "ffffaf",
    text_color: "bcbcbc",
    bg_color: "262626"
  },
  moltack: {
    title_color: "86092C",
    icon_color: "86092C",
    text_color: "574038",
    bg_color: "F5E1C0"
  },
  codeSTACKr: {
    title_color: "ff652f",
    icon_color: "FFE400",
    text_color: "ffffff",
    bg_color: "09131B",
    border_color: "0c1a25"
  },
  rose_pine: {
    title_color: "9ccfd8",
    icon_color: "ebbcba",
    text_color: "e0def4",
    bg_color: "191724"
  },
  catppuccin_latte: {
    title_color: "137980",
    icon_color: "8839ef",
    text_color: "4c4f69",
    bg_color: "eff1f5"
  },
  catppuccin_mocha: {
    title_color: "94e2d5",
    icon_color: "cba6f7",
    text_color: "cdd6f4",
    bg_color: "1e1e2e"
  },
  date_night: {
    title_color: "DA7885",
    text_color: "E1B2A2",
    icon_color: "BB8470",
    border_color: "170F0C",
    bg_color: "170F0C"
  },
  one_dark_pro: {
    title_color: "61AFEF",
    text_color: "E5C06E",
    icon_color: "C678DD",
    border_color: "3B4048",
    bg_color: "23272E"
  },
  rose: {
    title_color: "8d192b",
    text_color: "862931",
    icon_color: "B71F36",
    border_color: "e9d8d4",
    bg_color: "e9d8d4"
  },
  holi: {
    title_color: "5FABEE",
    text_color: "D6E7FF",
    icon_color: "5FABEE",
    border_color: "85A4C0",
    bg_color: "030314"
  },
  neon: {
    title_color: "00EAD3",
    text_color: "FF449F",
    icon_color: "00EAD3",
    border_color: "ffffff",
    bg_color: "000000"
  },
  blue_navy: {
    title_color: "82AAFF",
    text_color: "82AAFF",
    icon_color: "82AAFF",
    border_color: "ffffff",
    bg_color: "000000"
  },
  calm_pink: {
    title_color: "e07a5f",
    text_color: "edae49",
    icon_color: "ebcfb2",
    border_color: "e1bc29",
    bg_color: "2b2d40"
  },
  ambient_gradient: {
    title_color: "ffffff",
    text_color: "ffffff",
    icon_color: "ffffff",
    bg_color: "35,4158d0,c850c0,ffcc70"
  }
};

// src/common/color.js
var isValidHexColor = /* @__PURE__ */ __name((hexColor) => {
  return new RegExp(
    /^([A-Fa-f0-9]{8}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}|[A-Fa-f0-9]{4})$/
  ).test(hexColor);
}, "isValidHexColor");
var isValidGradient = /* @__PURE__ */ __name((colors) => {
  return colors.length > 2 && colors.slice(1).every((color) => isValidHexColor(color));
}, "isValidGradient");
var fallbackColor = /* @__PURE__ */ __name((color, fallbackColor2) => {
  let gradient = null;
  let colors = color ? color.split(",") : [];
  if (colors.length > 1 && isValidGradient(colors)) {
    gradient = colors;
  }
  return (gradient ? gradient : isValidHexColor(color) && `#${color}`) || fallbackColor2;
}, "fallbackColor");
var getCardColors = /* @__PURE__ */ __name(({
  title_color,
  text_color,
  icon_color,
  bg_color,
  border_color,
  ring_color,
  theme
}) => {
  const defaultTheme = themes["default"];
  const isThemeProvided = theme !== null && theme !== void 0;
  const selectedTheme = isThemeProvided ? themes[theme] : defaultTheme;
  const defaultBorderColor = "border_color" in selectedTheme ? selectedTheme.border_color : (
    // @ts-ignore
    defaultTheme.border_color
  );
  const titleColor = fallbackColor(
    title_color || selectedTheme.title_color,
    "#" + defaultTheme.title_color
  );
  const ringColor = fallbackColor(
    // @ts-ignore
    ring_color || selectedTheme.ring_color,
    titleColor
  );
  const iconColor = fallbackColor(
    icon_color || selectedTheme.icon_color,
    "#" + defaultTheme.icon_color
  );
  const textColor = fallbackColor(
    text_color || selectedTheme.text_color,
    "#" + defaultTheme.text_color
  );
  const bgColor = fallbackColor(
    bg_color || selectedTheme.bg_color,
    "#" + defaultTheme.bg_color
  );
  const borderColor = fallbackColor(
    border_color || defaultBorderColor,
    "#" + defaultBorderColor
  );
  if (typeof titleColor !== "string" || typeof textColor !== "string" || typeof ringColor !== "string" || typeof iconColor !== "string" || typeof borderColor !== "string") {
    throw new Error(
      "Unexpected behavior, all colors except background should be string."
    );
  }
  return { titleColor, iconColor, textColor, bgColor, borderColor, ringColor };
}, "getCardColors");

// src/common/ops.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var import_emoji_name_map = __toESM(require_lib(), 1);
var parseBoolean = /* @__PURE__ */ __name((value) => {
  if (typeof value === "boolean") {
    return value;
  }
  if (typeof value === "string") {
    if (value.toLowerCase() === "true") {
      return true;
    } else if (value.toLowerCase() === "false") {
      return false;
    }
  }
  return void 0;
}, "parseBoolean");
var parseArray = /* @__PURE__ */ __name((str) => {
  if (!str) {
    return [];
  }
  return str.split(",");
}, "parseArray");
var clampValue = /* @__PURE__ */ __name((number, min, max) => {
  if (Number.isNaN(parseInt(number, 10))) {
    return min;
  }
  return Math.max(min, Math.min(number, max));
}, "clampValue");
var lowercaseTrim = /* @__PURE__ */ __name((name) => name.toLowerCase().trim(), "lowercaseTrim");
var chunkArray = /* @__PURE__ */ __name((arr, perChunk) => {
  return arr.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / perChunk);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);
}, "chunkArray");
var parseEmojis = /* @__PURE__ */ __name((str) => {
  if (!str) {
    throw new Error("[parseEmoji]: str argument not provided");
  }
  return str.replace(/:\w+:/gm, (emoji) => {
    return import_emoji_name_map.default.get(emoji) || "";
  });
}, "parseEmojis");

// src/common/render.js
var flexLayout = /* @__PURE__ */ __name(({ items, gap, direction, sizes = [] }) => {
  let lastSize = 0;
  return items.filter(Boolean).map((item, i) => {
    const size = sizes[i] || 0;
    let transform = `translate(${lastSize}, 0)`;
    if (direction === "column") {
      transform = `translate(0, ${lastSize})`;
    }
    lastSize += size + gap;
    return `<g transform="${transform}">${item}</g>`;
  });
}, "flexLayout");
var createLanguageNode = /* @__PURE__ */ __name((langName, langColor) => {
  return `
    <g data-testid="primary-lang">
      <circle data-testid="lang-color" cx="0" cy="-5" r="6" fill="${langColor}" />
      <text data-testid="lang-name" class="gray" x="15">${langName}</text>
    </g>
    `;
}, "createLanguageNode");
var createProgressNode = /* @__PURE__ */ __name(({
  x,
  y,
  width,
  color,
  progress,
  progressBarBackgroundColor,
  delay
}) => {
  const progressPercentage = clampValue(progress, 2, 100);
  return `
    <svg width="${width}" x="${x}" y="${y}">
      <rect rx="5" ry="5" x="0" y="0" width="${width}" height="8" fill="${progressBarBackgroundColor}"></rect>
      <svg data-testid="lang-progress" width="${progressPercentage}%">
        <rect
            height="8"
            fill="${color}"
            rx="5" ry="5" x="0" y="0"
            class="lang-progress"
            style="animation-delay: ${delay}ms;"
        />
      </svg>
    </svg>
  `;
}, "createProgressNode");
var iconWithLabel = /* @__PURE__ */ __name((icon, label, testid, iconSize) => {
  if (typeof label === "number" && label <= 0) {
    return "";
  }
  const iconSvg = `
      <svg
        class="icon"
        y="-12"
        viewBox="0 0 16 16"
        version="1.1"
        width="${iconSize}"
        height="${iconSize}"
      >
        ${icon}
      </svg>
    `;
  const text = `<text data-testid="${testid}" class="gray">${label}</text>`;
  return flexLayout({ items: [iconSvg, text], gap: 20 }).join("");
}, "iconWithLabel");
var ERROR_CARD_LENGTH = 576.5;
var UPSTREAM_API_ERRORS = [
  TRY_AGAIN_LATER,
  SECONDARY_ERROR_MESSAGES.MAX_RETRY
];
var renderError = /* @__PURE__ */ __name(({
  message,
  secondaryMessage = "",
  renderOptions = {}
}) => {
  const {
    title_color,
    text_color,
    bg_color,
    border_color,
    theme = "default",
    show_repo_link = true
  } = renderOptions;
  const { titleColor, textColor, bgColor, borderColor } = getCardColors({
    title_color,
    text_color,
    icon_color: "",
    bg_color,
    border_color,
    ring_color: "",
    theme
  });
  return `
    <svg width="${ERROR_CARD_LENGTH}"  height="120" viewBox="0 0 ${ERROR_CARD_LENGTH} 120" fill="${bgColor}" xmlns="http://www.w3.org/2000/svg">
    <style>
    .text { font: 600 16px 'Segoe UI', Ubuntu, Sans-Serif; fill: ${titleColor} }
    .small { font: 600 12px 'Segoe UI', Ubuntu, Sans-Serif; fill: ${textColor} }
    .gray { fill: #858585 }
    </style>
    <rect x="0.5" y="0.5" width="${ERROR_CARD_LENGTH - 1}" height="99%" rx="4.5" fill="${bgColor}" stroke="${borderColor}"/>
    <text x="25" y="45" class="text">Something went wrong!${UPSTREAM_API_ERRORS.includes(secondaryMessage) || !show_repo_link ? "" : " file an issue at https://tiny.one/readme-stats"}</text>
    <text data-testid="message" x="25" y="55" class="text small">
      <tspan x="25" dy="18">${encodeHTML(message)}</tspan>
      <tspan x="25" dy="18" class="gray">${secondaryMessage}</tspan>
    </text>
    </svg>
  `;
}, "renderError");
var measureText = /* @__PURE__ */ __name((str, fontSize = 10) => {
  const widths = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0.2796875,
    0.2765625,
    0.3546875,
    0.5546875,
    0.5546875,
    0.8890625,
    0.665625,
    0.190625,
    0.3328125,
    0.3328125,
    0.3890625,
    0.5828125,
    0.2765625,
    0.3328125,
    0.2765625,
    0.3015625,
    0.5546875,
    0.5546875,
    0.5546875,
    0.5546875,
    0.5546875,
    0.5546875,
    0.5546875,
    0.5546875,
    0.5546875,
    0.5546875,
    0.2765625,
    0.2765625,
    0.584375,
    0.5828125,
    0.584375,
    0.5546875,
    1.0140625,
    0.665625,
    0.665625,
    0.721875,
    0.721875,
    0.665625,
    0.609375,
    0.7765625,
    0.721875,
    0.2765625,
    0.5,
    0.665625,
    0.5546875,
    0.8328125,
    0.721875,
    0.7765625,
    0.665625,
    0.7765625,
    0.721875,
    0.665625,
    0.609375,
    0.721875,
    0.665625,
    0.94375,
    0.665625,
    0.665625,
    0.609375,
    0.2765625,
    0.3546875,
    0.2765625,
    0.4765625,
    0.5546875,
    0.3328125,
    0.5546875,
    0.5546875,
    0.5,
    0.5546875,
    0.5546875,
    0.2765625,
    0.5546875,
    0.5546875,
    0.221875,
    0.240625,
    0.5,
    0.221875,
    0.8328125,
    0.5546875,
    0.5546875,
    0.5546875,
    0.5546875,
    0.3328125,
    0.5,
    0.2765625,
    0.5546875,
    0.5,
    0.721875,
    0.5,
    0.5,
    0.5,
    0.3546875,
    0.259375,
    0.353125,
    0.5890625
  ];
  const avg = 0.5279276315789471;
  return str.split("").map(
    (c) => c.charCodeAt(0) < widths.length ? widths[c.charCodeAt(0)] : avg
  ).reduce((cur, acc) => acc + cur) * fontSize;
}, "measureText");

// src/common/Card.js
var Card = class {
  static {
    __name(this, "Card");
  }
  /**
   * Creates a new card instance.
   *
   * @param {object} args Card arguments.
   * @param {number=} args.width Card width.
   * @param {number=} args.height Card height.
   * @param {number=} args.border_radius Card border radius.
   * @param {string=} args.customTitle Card custom title.
   * @param {string=} args.defaultTitle Card default title.
   * @param {string=} args.titlePrefixIcon Card title prefix icon.
   * @param {object} [args.colors={}] Card colors arguments.
   * @param {string=} args.colors.titleColor Card title color.
   * @param {string=} args.colors.textColor Card text color.
   * @param {string=} args.colors.iconColor Card icon color.
   * @param {string|string[]=} args.colors.bgColor Card background color.
   * @param {string=} args.colors.borderColor Card border color.
   */
  constructor({
    width = 100,
    height = 100,
    border_radius = 4.5,
    colors = {},
    customTitle,
    defaultTitle = "",
    titlePrefixIcon
  }) {
    this.width = width;
    this.height = height;
    this.hideBorder = false;
    this.hideTitle = false;
    this.border_radius = border_radius;
    this.colors = colors;
    this.title = customTitle === void 0 ? encodeHTML(defaultTitle) : encodeHTML(customTitle);
    this.css = "";
    this.paddingX = 25;
    this.paddingY = 35;
    this.titlePrefixIcon = titlePrefixIcon;
    this.animations = true;
    this.a11yTitle = "";
    this.a11yDesc = "";
  }
  /**
   * @returns {void}
   */
  disableAnimations() {
    this.animations = false;
  }
  /**
   * @param {Object} props The props object.
   * @param {string} props.title Accessibility title.
   * @param {string} props.desc Accessibility description.
   * @returns {void}
   */
  setAccessibilityLabel({ title: title2, desc }) {
    this.a11yTitle = title2;
    this.a11yDesc = desc;
  }
  /**
   * @param {string} value The CSS to add to the card.
   * @returns {void}
   */
  setCSS(value) {
    this.css = value;
  }
  /**
   * @param {boolean} value Whether to hide the border or not.
   * @returns {void}
   */
  setHideBorder(value) {
    this.hideBorder = value;
  }
  /**
   * @param {boolean} value Whether to hide the title or not.
   * @returns {void}
   */
  setHideTitle(value) {
    this.hideTitle = value;
    if (value) {
      this.height -= 30;
    }
  }
  /**
   * @param {string} text The title to set.
   * @returns {void}
   */
  setTitle(text) {
    this.title = text;
  }
  /**
   * @returns {string} The rendered card title.
   */
  renderTitle() {
    const titleText = `
      <text
        x="0"
        y="0"
        class="header"
        data-testid="header"
      >${this.title}</text>
    `;
    const prefixIcon = `
      <svg
        class="icon"
        x="0"
        y="-13"
        viewBox="0 0 16 16"
        version="1.1"
        width="16"
        height="16"
      >
        ${this.titlePrefixIcon}
      </svg>
    `;
    return `
      <g
        data-testid="card-title"
        transform="translate(${this.paddingX}, ${this.paddingY})"
      >
        ${flexLayout({
      items: [this.titlePrefixIcon ? prefixIcon : "", titleText],
      gap: 25
    }).join("")}
      </g>
    `;
  }
  /**
   * @returns {string} The rendered card gradient.
   */
  renderGradient() {
    if (typeof this.colors.bgColor !== "object") {
      return "";
    }
    const gradients = this.colors.bgColor.slice(1);
    return typeof this.colors.bgColor === "object" ? `
        <defs>
          <linearGradient
            id="gradient"
            gradientTransform="rotate(${this.colors.bgColor[0]})"
            gradientUnits="userSpaceOnUse"
          >
            ${gradients.map((grad, index) => {
      let offset = index * 100 / (gradients.length - 1);
      return `<stop offset="${offset}%" stop-color="#${grad}" />`;
    })}
          </linearGradient>
        </defs>
        ` : "";
  }
  /**
   * Retrieves css animations for a card.
   *
   * @returns {string} Animation css.
   */
  getAnimations = /* @__PURE__ */ __name(() => {
    return `
      /* Animations */
      @keyframes scaleInAnimation {
        from {
          transform: translate(-5px, 5px) scale(0);
        }
        to {
          transform: translate(-5px, 5px) scale(1);
        }
      }
      @keyframes fadeInAnimation {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    `;
  }, "getAnimations");
  /**
   * @param {string} body The inner body of the card.
   * @returns {string} The rendered card.
   */
  render(body) {
    return `
      <svg
        width="${this.width}"
        height="${this.height}"
        viewBox="0 0 ${this.width} ${this.height}"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-labelledby="descId"
      >
        <title id="titleId">${this.a11yTitle}</title>
        <desc id="descId">${this.a11yDesc}</desc>
        <style>
          .header {
            font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif;
            fill: ${this.colors.titleColor};
            animation: fadeInAnimation 0.8s ease-in-out forwards;
          }
          @supports(-moz-appearance: auto) {
            /* Selector detects Firefox */
            .header { font-size: 15.5px; }
          }
          ${this.css}

          ${false ? "" : this.getAnimations()}
          ${this.animations === false ? `* { animation-duration: 0s !important; animation-delay: 0s !important; }` : ""}
        </style>

        ${this.renderGradient()}

        <rect
          data-testid="card-bg"
          x="0.5"
          y="0.5"
          rx="${this.border_radius}"
          height="99%"
          stroke="${this.colors.borderColor}"
          width="${this.width - 1}"
          fill="${typeof this.colors.bgColor === "object" ? "url(#gradient)" : this.colors.bgColor}"
          stroke-opacity="${this.hideBorder ? 0 : 1}"
        />

        ${this.hideTitle ? "" : this.renderTitle()}

        <g
          data-testid="main-card-body"
          transform="translate(0, ${this.hideTitle ? this.paddingX : this.paddingY + 20})"
        >
          ${body}
        </g>
      </svg>
    `;
  }
};
var Card_default = Card;

// src/common/fmt.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var import_word_wrap = __toESM(require_word_wrap(), 1);
var kFormatter = /* @__PURE__ */ __name((num, precision) => {
  const abs = Math.abs(num);
  const sign = Math.sign(num);
  if (typeof precision === "number" && !isNaN(precision)) {
    return (sign * (abs / 1e3)).toFixed(precision) + "k";
  }
  if (abs < 1e3) {
    return sign * abs;
  }
  return sign * parseFloat((abs / 1e3).toFixed(1)) + "k";
}, "kFormatter");
var formatBytes = /* @__PURE__ */ __name((bytes) => {
  if (bytes < 0) {
    throw new Error("Bytes must be a non-negative number");
  }
  if (bytes === 0) {
    return "0 B";
  }
  const sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB"];
  const base = 1024;
  const i = Math.floor(Math.log(bytes) / Math.log(base));
  if (i >= sizes.length) {
    throw new Error("Bytes is too large to convert to a human-readable string");
  }
  return `${(bytes / Math.pow(base, i)).toFixed(1)} ${sizes[i]}`;
}, "formatBytes");
var wrapTextMultiline = /* @__PURE__ */ __name((text, width = 59, maxLines = 3) => {
  const fullWidthComma = "\uFF0C";
  const encoded = encodeHTML(text);
  const isChinese = encoded.includes(fullWidthComma);
  let wrapped = [];
  if (isChinese) {
    wrapped = encoded.split(fullWidthComma);
  } else {
    wrapped = (0, import_word_wrap.default)(encoded, {
      width
    }).split("\n");
  }
  const lines = wrapped.map((line) => line.trim()).slice(0, maxLines);
  if (wrapped.length > maxLines) {
    lines[maxLines - 1] += "...";
  }
  const multiLineText = lines.filter(Boolean);
  return multiLineText;
}, "wrapTextMultiline");

// src/common/I18n.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var FALLBACK_LOCALE = "en";
var I18n = class {
  static {
    __name(this, "I18n");
  }
  /**
   * Constructor.
   *
   * @param {Object} options Options.
   * @param {string=} options.locale Locale.
   * @param {any} options.translations Translations.
   */
  constructor({ locale, translations }) {
    this.locale = locale || FALLBACK_LOCALE;
    this.translations = translations;
  }
  /**
   * Get translation.
   *
   * @param {string} str String to translate.
   * @returns {string} Translated string.
   */
  t(str) {
    if (!this.translations[str]) {
      throw new Error(`${str} Translation string not found`);
    }
    if (!this.translations[str][this.locale]) {
      throw new Error(
        `'${str}' translation not found for locale '${this.locale}'`
      );
    }
    return this.translations[str][this.locale];
  }
};

// src/common/icons.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var icons = {
  star: `<path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"/>`,
  commits: `<path fill-rule="evenodd" d="M1.643 3.143L.427 1.927A.25.25 0 000 2.104V5.75c0 .138.112.25.25.25h3.646a.25.25 0 00.177-.427L2.715 4.215a6.5 6.5 0 11-1.18 4.458.75.75 0 10-1.493.154 8.001 8.001 0 101.6-5.684zM7.75 4a.75.75 0 01.75.75v2.992l2.028.812a.75.75 0 01-.557 1.392l-2.5-1A.75.75 0 017 8.25v-3.5A.75.75 0 017.75 4z"/>`,
  prs: `<path fill-rule="evenodd" d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"/>`,
  prs_merged: `<path fill-rule="evenodd" d="M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z" />`,
  prs_merged_percentage: `<path fill-rule="evenodd" d="M13.442 2.558a.625.625 0 0 1 0 .884l-10 10a.625.625 0 1 1-.884-.884l10-10a.625.625 0 0 1 .884 0zM4.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm7 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />`,
  issues: `<path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"/>`,
  icon: `<path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/>`,
  contribs: `<path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/>`,
  fork: `<path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>`,
  reviews: `<path fill-rule="evenodd" d="M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 0 1 0 1.798c-.45.678-1.367 1.932-2.637 3.023C11.67 13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797 10.83.88 9.576.43 8.898a1.62 1.62 0 0 1 0-1.798c.45-.677 1.367-1.931 2.637-3.022C4.33 2.992 6.019 2 8 2ZM1.679 7.932a.12.12 0 0 0 0 .136c.411.622 1.241 1.75 2.366 2.717C5.176 11.758 6.527 12.5 8 12.5c1.473 0 2.825-.742 3.955-1.715 1.124-.967 1.954-2.096 2.366-2.717a.12.12 0 0 0 0-.136c-.412-.621-1.242-1.75-2.366-2.717C10.824 4.242 9.473 3.5 8 3.5c-1.473 0-2.825.742-3.955 1.715-1.124.967-1.954 2.096-2.366 2.717ZM8 10a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 10Z"/>`,
  discussions_started: `<path fill-rule="evenodd" d="M1.75 1h8.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 10.25 10H7.061l-2.574 2.573A1.458 1.458 0 0 1 2 11.543V10h-.25A1.75 1.75 0 0 1 0 8.25v-5.5C0 1.784.784 1 1.75 1ZM1.5 2.75v5.5c0 .138.112.25.25.25h1a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h3.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25Zm13 2a.25.25 0 0 0-.25-.25h-.5a.75.75 0 0 1 0-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 14.25 12H14v1.543a1.458 1.458 0 0 1-2.487 1.03L9.22 12.28a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l2.22 2.22v-2.19a.75.75 0 0 1 .75-.75h1a.25.25 0 0 0 .25-.25Z" />`,
  discussions_answered: `<path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z" />`,
  gist: `<path fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25Zm7.47 3.97a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L10.69 8 9.22 6.53a.75.75 0 0 1 0-1.06ZM6.78 6.53 5.31 8l1.47 1.47a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-2-2a.75.75 0 0 1 0-1.06l2-2a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z" />`
};
var rankIcon = /* @__PURE__ */ __name((rankIcon2, rankLevel, percentile) => {
  switch (rankIcon2) {
    case "github":
      return `
        <svg x="-38" y="-30" height="66" width="66" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" data-testid="github-rank-icon">
          <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
        </svg>
      `;
    case "percentile":
      return `
        <text x="-5" y="-12" alignment-baseline="central" dominant-baseline="central" text-anchor="middle" data-testid="percentile-top-header" class="rank-percentile-header">
          Top
        </text>
        <text x="-5" y="12" alignment-baseline="central" dominant-baseline="central" text-anchor="middle" data-testid="percentile-rank-value" class="rank-percentile-text">
          ${percentile.toFixed(1)}%
        </text>
      `;
    case "default":
    default:
      return `
        <text x="-5" y="3" alignment-baseline="central" dominant-baseline="central" text-anchor="middle" data-testid="level-rank-icon">
          ${rankLevel}
        </text>
      `;
  }
}, "rankIcon");

// src/translations.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var statCardLocales = /* @__PURE__ */ __name(({ name, apostrophe }) => {
  const encodedName = encodeHTML(name);
  return {
    "statcard.title": {
      en: `${encodedName}'${apostrophe} GitHub Stats`,
      ar: `${encodedName} \u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A \u062C\u064A\u062A \u0647\u0627\u0628`,
      az: `${encodedName}'${apostrophe} Hesab\u0131n\u0131n GitHub Statistikas\u0131`,
      ca: `Estad\xEDstiques de GitHub de ${encodedName}`,
      cn: `${encodedName} \u7684 GitHub \u7EDF\u8BA1\u6570\u636E`,
      "zh-tw": `${encodedName} \u7684 GitHub \u7D71\u8A08\u8CC7\u6599`,
      cs: `GitHub statistiky u\u017Eivatele ${encodedName}`,
      de: `${encodedName + apostrophe} GitHub-Statistiken`,
      sw: `GitHub Stats za ${encodedName}`,
      ur: `${encodedName} \u06A9\u06D2 \u06AF\u0679 \u06C1\u0628 \u06A9\u06D2 \u0627\u0639\u062F\u0627\u062F \u0648 \u0634\u0645\u0627\u0631`,
      bg: `GitHub \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u043D\u0430 \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B ${encodedName}`,
      bn: `${encodedName} \u098F\u09B0 GitHub \u09AA\u09B0\u09BF\u09B8\u0982\u0996\u09CD\u09AF\u09BE\u09A8`,
      es: `Estad\xEDsticas de GitHub de ${encodedName}`,
      fa: `\u0622\u0645\u0627\u0631 \u06AF\u06CC\u062A\u200C\u0647\u0627\u0628 ${encodedName}`,
      fi: `${encodedName}:n GitHub-tilastot`,
      fr: `Statistiques GitHub de ${encodedName}`,
      hi: `${encodedName} \u0915\u0947 GitHub \u0906\u0901\u0915\u0921\u093C\u0947`,
      sa: `${encodedName} \u0907\u0924\u094D\u092F\u0938\u094D\u092F GitHub \u0938\u093E\u0902\u0916\u094D\u092F\u093F\u0915\u0940`,
      hu: `${encodedName} GitHub statisztika`,
      it: `Statistiche GitHub di ${encodedName}`,
      ja: `${encodedName}\u306E GitHub \u7D71\u8A08`,
      kr: `${encodedName}\uC758 GitHub \uD1B5\uACC4`,
      nl: `${encodedName}'${apostrophe} GitHub-statistieken`,
      "pt-pt": `Estat\xEDsticas do GitHub de ${encodedName}`,
      "pt-br": `Estat\xEDsticas do GitHub de ${encodedName}`,
      np: `${encodedName}'${apostrophe} \u0917\u093F\u091F\u0939\u092C \u0924\u0925\u094D\u092F\u093E\u0919\u094D\u0915`,
      el: `\u03A3\u03C4\u03B1\u03C4\u03B9\u03C3\u03C4\u03B9\u03BA\u03AC GitHub \u03C4\u03BF\u03C5 ${encodedName}`,
      ro: `Statisticile GitHub ale lui ${encodedName}`,
      ru: `\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 GitHub \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F ${encodedName}`,
      "uk-ua": `\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 GitHub \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 ${encodedName}`,
      id: `Statistik GitHub ${encodedName}`,
      ml: `${encodedName}'${apostrophe} \u0D17\u0D3F\u0D31\u0D4D\u0D31\u0D4D\u0D39\u0D2C\u0D4D \u0D38\u0D4D\u0D25\u0D3F\u0D24\u0D3F\u0D35\u0D3F\u0D35\u0D30\u0D15\u0D4D\u0D15\u0D23\u0D15\u0D4D\u0D15\u0D41\u0D15\u0D7E`,
      my: `${encodedName} \u101B\u1032\u1037 GitHub \u1021\u1001\u103C\u1031\u1021\u1014\u1031\u1019\u103B\u102C\u1038`,
      ta: `${encodedName} \u0B95\u0BBF\u0B9F\u0BCD\u0BB9\u0BAA\u0BCD \u0BAA\u0BC1\u0BB3\u0BCD\u0BB3\u0BBF\u0BB5\u0BBF\u0BB5\u0BB0\u0B99\u0BCD\u0B95\u0BB3\u0BCD`,
      sk: `GitHub \u0161tatistiky pou\u017E\xEDvate\u013Ea ${encodedName}`,
      tr: `${encodedName} Hesab\u0131n\u0131n GitHub \u0130statistikleri`,
      pl: `Statystyki GitHub u\u017Cytkownika ${encodedName}`,
      uz: `${encodedName}ning GitHub'dagi statistikasi`,
      vi: `Th\u1ED1ng K\xEA GitHub ${encodedName}`,
      se: `GitHubstatistik f\xF6r ${encodedName}`,
      he: `\u05E1\u05D8\u05D8\u05D9\u05E1\u05D8\u05D9\u05E7\u05D5\u05EA \u05D4\u05D2\u05D9\u05D8\u05D4\u05D0\u05D1 \u05E9\u05DC ${encodedName}`,
      fil: `Mga Stats ng GitHub ni ${encodedName}`,
      th: `\u0E2A\u0E16\u0E34\u0E15\u0E34 GitHub \u0E02\u0E2D\u0E07 ${encodedName}`,
      sr: `GitHub \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u043A\u043E\u0440\u0438\u0441\u043D\u0438\u043A\u0430 ${encodedName}`,
      "sr-latn": `GitHub statistika korisnika ${encodedName}`,
      no: `GitHub-statistikk for ${encodedName}`
    },
    "statcard.ranktitle": {
      en: `${encodedName}'${apostrophe} GitHub Rank`,
      ar: `${encodedName} \u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A \u062C\u064A\u062A \u0647\u0627\u0628`,
      az: `${encodedName}'${apostrophe} Hesab\u0131n\u0131n GitHub Statistikas\u0131`,
      ca: `Estad\xEDstiques de GitHub de ${encodedName}`,
      cn: `${encodedName} \u7684 GitHub \u7EDF\u8BA1\u6570\u636E`,
      "zh-tw": `${encodedName} \u7684 GitHub \u7D71\u8A08\u8CC7\u6599`,
      cs: `GitHub statistiky u\u017Eivatele ${encodedName}`,
      de: `${encodedName + apostrophe} GitHub-Statistiken`,
      sw: `GitHub Rank ya ${encodedName}`,
      ur: `${encodedName} \u06A9\u06CC \u06AF\u0679 \u06C1\u0628 \u0631\u06CC\u0646\u06A9`,
      bg: `GitHub \u0440\u0430\u043D\u0433 \u043D\u0430 ${encodedName}`,
      bn: `${encodedName} \u098F\u09B0 GitHub \u09AA\u09B0\u09BF\u09B8\u0982\u0996\u09CD\u09AF\u09BE\u09A8`,
      es: `Estad\xEDsticas de GitHub de ${encodedName}`,
      fa: `\u0631\u062A\u0628\u0647 \u06AF\u06CC\u062A\u200C\u0647\u0627\u0628 ${encodedName}`,
      fi: `${encodedName}:n GitHub-sijoitus`,
      fr: `Statistiques GitHub de ${encodedName}`,
      hi: `${encodedName} \u0915\u093E GitHub \u0938\u094D\u0925\u093E\u0928`,
      sa: `${encodedName} \u0907\u0924\u094D\u092F\u0938\u094D\u092F GitHub \u0938\u094D\u0925\u093E\u0928\u092E\u094D`,
      hu: `${encodedName} GitHub statisztika`,
      it: `Statistiche GitHub di ${encodedName}`,
      ja: `${encodedName} \u306E GitHub \u30E9\u30F3\u30AF`,
      kr: `${encodedName}\uC758 GitHub \uD1B5\uACC4`,
      nl: `${encodedName}'${apostrophe} GitHub-statistieken`,
      "pt-pt": `Estat\xEDsticas do GitHub de ${encodedName}`,
      "pt-br": `Estat\xEDsticas do GitHub de ${encodedName}`,
      np: `${encodedName}'${apostrophe} \u0917\u093F\u091F\u0939\u092C \u0924\u0925\u094D\u092F\u093E\u0919\u094D\u0915`,
      el: `\u03A3\u03C4\u03B1\u03C4\u03B9\u03C3\u03C4\u03B9\u03BA\u03AC GitHub \u03C4\u03BF\u03C5 ${encodedName}`,
      ro: `Rankul GitHub al lui ${encodedName}`,
      ru: `\u0420\u0435\u0439\u0442\u0438\u043D\u0433 GitHub \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F ${encodedName}`,
      "uk-ua": `\u0420\u0435\u0439\u0442\u0438\u043D\u0433 GitHub \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 ${encodedName}`,
      id: `Statistik GitHub ${encodedName}`,
      ml: `${encodedName}'${apostrophe} \u0D17\u0D3F\u0D31\u0D4D\u0D31\u0D4D\u0D39\u0D2C\u0D4D \u0D38\u0D4D\u0D25\u0D3F\u0D24\u0D3F\u0D35\u0D3F\u0D35\u0D30\u0D15\u0D4D\u0D15\u0D23\u0D15\u0D4D\u0D15\u0D41\u0D15\u0D7E`,
      my: `${encodedName} \u101B\u1032\u1037 GitHub \u1021\u1006\u1004\u1037\u103A`,
      ta: `${encodedName} \u0B95\u0BBF\u0B9F\u0BCD\u0BB9\u0BAA\u0BCD \u0BA4\u0BB0\u0BB5\u0BB0\u0BBF\u0B9A\u0BC8`,
      sk: `GitHub \u0161tatistiky pou\u017E\xEDvate\u013Ea ${encodedName}`,
      tr: `${encodedName} Hesab\u0131n\u0131n GitHub Y\u0131ld\u0131zlar\u0131`,
      pl: `Statystyki GitHub u\u017Cytkownika ${encodedName}`,
      uz: `${encodedName}ning GitHub'dagi statistikasi`,
      vi: `Th\u1ED1ng K\xEA GitHub ${encodedName}`,
      se: `GitHubstatistik f\xF6r ${encodedName}`,
      he: `\u05D3\u05E8\u05D2\u05EA \u05D4\u05D2\u05D9\u05D8\u05D4\u05D0\u05D1 \u05E9\u05DC ${encodedName}`,
      fil: `Ranggo ng GitHub ni ${encodedName}`,
      th: `\u0E2D\u0E31\u0E19\u0E14\u0E31\u0E1A GitHub \u0E02\u0E2D\u0E07 ${encodedName}`,
      sr: `\u0420\u0430\u043D\u043A \u043A\u043E\u0440\u0438\u0441\u043D\u0438\u043A\u0430 ${encodedName}`,
      "sr-latn": `Rank korisnika ${encodedName}`,
      no: `GitHub-statistikk for ${encodedName}`
    },
    "statcard.totalstars": {
      en: "Total Stars Earned",
      ar: "\u0645\u062C\u0645\u0648\u0639 \u0627\u0644\u0646\u062C\u0648\u0645",
      az: "\xDCmumi Ulduz",
      ca: "Total d'estrelles",
      cn: "\u83B7\u6807\u661F\u6570",
      "zh-tw": "\u5F97\u6A19\u661F\u661F\u6578\u91CF\uFF08Star\uFF09",
      cs: "Celkem hv\u011Bzd",
      de: "Insgesamt erhaltene Sterne",
      sw: "Medali(stars) ulizojishindia",
      ur: "\u06A9\u0644 \u0633\u062A\u0627\u0631\u06D2 \u062D\u0627\u0635\u0644 \u06A9\u06CC\u06D2",
      bg: "\u041F\u043E\u043B\u0443\u0447\u0435\u043D\u0438 \u0437\u0432\u0435\u0437\u0434\u0438",
      bn: "\u09B8\u09B0\u09CD\u09AC\u09AE\u09CB\u099F Star",
      es: "Estrellas totales",
      fa: "\u0645\u062C\u0645\u0648\u0639 \u0633\u062A\u0627\u0631\u0647\u200C\u0647\u0627\u06CC \u062F\u0631\u06CC\u0627\u0641\u062A\u200C\u0634\u062F\u0647",
      fi: "Ansaitut t\xE4hdet yhteens\xE4",
      fr: "Total d'\xE9toiles",
      hi: "\u0915\u0941\u0932 \u0905\u0930\u094D\u091C\u093F\u0924 \u0938\u093F\u0924\u093E\u0930\u0947",
      sa: "\u0905\u0930\u094D\u091C\u093F\u0924\u093E\u0903 \u0915\u0941\u0932-\u0924\u093E\u0930\u0915\u093E\u0903",
      hu: "Csillagok",
      it: "Stelle totali",
      ja: "\u30B9\u30BF\u30FC\u3055\u308C\u305F\u6570",
      kr: "\uBC1B\uC740 \uC2A4\uD0C0 \uC218",
      nl: "Totaal Sterren Ontvangen",
      "pt-pt": "Total de estrelas",
      "pt-br": "Total de estrelas",
      np: "\u0915\u0941\u0932 \u0924\u093E\u0930\u093E\u0939\u0930\u0942",
      el: "\u03A3\u03CD\u03BD\u03BF\u03BB\u03BF \u0391\u03C3\u03C4\u03B5\u03C1\u03B9\u03CE\u03BD",
      ro: "Total de stele c\xE2\u0219tigate",
      ru: "\u0412\u0441\u0435\u0433\u043E \u0437\u0432\u0451\u0437\u0434",
      "uk-ua": "\u0412\u0441\u044C\u043E\u0433\u043E \u0437\u0456\u0440\u043E\u043A",
      id: "Total Bintang",
      ml: "\u0D06\u0D15\u0D46 \u0D28\u0D15\u0D4D\u0D37\u0D24\u0D4D\u0D30\u0D19\u0D4D\u0D19\u0D7E",
      my: "\u1005\u102F\u1005\u102F\u1015\u1031\u102B\u1004\u103A\u1038\u1000\u103C\u101A\u103A\u1019\u103B\u102C\u1038",
      ta: "\u0B9A\u0BAE\u0BCD\u0BAA\u0BBE\u0BA4\u0BBF\u0BA4\u0BCD\u0BA4 \u0BAE\u0BCA\u0BA4\u0BCD\u0BA4 \u0BA8\u0B9F\u0BCD\u0B9A\u0BA4\u0BCD\u0BA4\u0BBF\u0BB0\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
      sk: "Hviezdy",
      tr: "Toplam Y\u0131ld\u0131z",
      pl: "Liczba otrzymanych gwiazdek",
      uz: "Yulduzchalar",
      vi: "T\u1ED5ng S\u1ED1 Sao",
      se: "Antal intj\xE4nade stj\xE4rnor",
      he: "\u05E1\u05DA \u05DB\u05DC \u05D4\u05DB\u05D5\u05DB\u05D1\u05D9\u05DD \u05E9\u05D4\u05D5\u05E9\u05D2\u05D5",
      fil: "Kabuuang Nakuhang Bituin",
      th: "\u0E14\u0E32\u0E27\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A",
      sr: "\u0411\u0440\u043E\u0458 \u043E\u0441\u0432\u043E\u0458\u0435\u043D\u0438\u0445 \u0437\u0432\u0435\u0437\u0434\u0438\u0446\u0430",
      "sr-latn": "Broj osvojenih zvezdica",
      no: "Totalt antall stjerner"
    },
    "statcard.commits": {
      en: "Total Commits",
      ar: "\u0645\u062C\u0645\u0648\u0639 \u0627\u0644\u0645\u0633\u0627\u0647\u0645\u0627\u062A",
      az: "\xDCmumi Commit",
      ca: "Commits totals",
      cn: "\u7D2F\u8BA1\u63D0\u4EA4\u603B\u6570",
      "zh-tw": "\u7D2F\u8A08\u63D0\u4EA4\u6578\u91CF\uFF08Commit\uFF09",
      cs: "Celkem commit\u016F",
      de: "Anzahl Commits",
      sw: "Matendo yako yote",
      ur: "\u06A9\u0644 \u06A9\u0645\u0679",
      bg: "\u041E\u0431\u0449\u043E \u0430\u043D\u0433\u0430\u0436\u0438\u043C\u0435\u043D\u0442\u0438",
      bn: "\u09B8\u09B0\u09CD\u09AC\u09AE\u09CB\u099F Commit",
      es: "Commits totales",
      fa: "\u0645\u062C\u0645\u0648\u0639 \u06A9\u0627\u0645\u06CC\u062A\u200C\u0647\u0627",
      fi: "Yhteens\xE4 committeja",
      fr: "Total des Commits",
      hi: "\u0915\u0941\u0932 commits",
      sa: "\u0915\u0941\u0932-\u0938\u092E\u093F\u0928\u094D\u091A\u092F\u0903",
      hu: "\xD6sszes commit",
      it: "Commit totali",
      ja: "\u5408\u8A08\u30B3\u30DF\u30C3\u30C8\u6570",
      kr: "\uC804\uCCB4 \uCEE4\uBC0B \uC218",
      nl: "Aantal commits",
      "pt-pt": "Total de Commits",
      "pt-br": "Total de Commits",
      np: "\u0915\u0941\u0932 Commits",
      el: "\u03A3\u03CD\u03BD\u03BF\u03BB\u03BF Commits",
      ro: "Total Commit-uri",
      ru: "\u0412\u0441\u0435\u0433\u043E \u043A\u043E\u043C\u043C\u0438\u0442\u043E\u0432",
      "uk-ua": "\u0412\u0441\u044C\u043E\u0433\u043E \u043A\u043E\u043C\u0456\u0442\u0456\u0432",
      id: "Total Komitmen",
      ml: "\u0D06\u0D15\u0D46 \u0D15\u0D2E\u0D4D\u0D2E\u0D3F\u0D31\u0D4D\u0D31\u0D41\u0D15\u0D7E",
      my: "\u1005\u102F\u1005\u102F\u1015\u1031\u102B\u1004\u103A\u1038 Commit \u1019\u103B\u102C\u1038",
      ta: `\u0BAE\u0BCA\u0BA4\u0BCD\u0BA4 \u0B95\u0BAE\u0BBF\u0B9F\u0BCD\u0B95\u0BB3\u0BCD`,
      sk: "V\u0161etky commity",
      tr: "Toplam Commit",
      pl: "Wszystkie commity",
      uz: "'Commit'lar",
      vi: "T\u1ED5ng S\u1ED1 Cam K\u1EBFt",
      se: "Totalt antal commits",
      he: "\u05E1\u05DA \u05DB\u05DC \u05D4\u05BEcommits",
      fil: "Kabuuang Commits",
      th: "Commit \u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14",
      sr: "\u0423\u043A\u0443\u043F\u043D\u043E commit-\u043E\u0432\u0430",
      "sr-latn": "Ukupno commit-ova",
      no: "Totalt antall commits"
    },
    "statcard.prs": {
      en: "Total PRs",
      ar: "\u0645\u062C\u0645\u0648\u0639 \u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0633\u062D\u0628",
      az: "\xDCmumi PR",
      ca: "PRs totals",
      cn: "\u53D1\u8D77\u7684 PR \u603B\u6570",
      "zh-tw": "\u62C9\u53D6\u8ACB\u6C42\u6578\u91CF\uFF08PR\uFF09",
      cs: "Celkem PRs",
      de: "PRs Insgesamt",
      sw: "PRs Zote",
      ur: "\u06A9\u0644 \u067E\u06CC \u0622\u0631\u0632",
      bg: "\u0417\u0430\u044F\u0432\u043A\u0438 \u0437\u0430 \u0438\u0437\u0442\u0435\u0433\u043B\u044F\u043D\u0438\u044F",
      bn: "\u09B8\u09B0\u09CD\u09AC\u09AE\u09CB\u099F PR",
      es: "PRs totales",
      fa: "\u0645\u062C\u0645\u0648\u0639 Pull Request",
      fi: "Yhteens\xE4 PR:t",
      fr: "Total des PRs",
      hi: "\u0915\u0941\u0932 PR",
      sa: "\u0915\u0941\u0932-\u092A\u0940\u0906\u0930",
      hu: "\xD6sszes PR",
      it: "PR totali",
      ja: "\u5408\u8A08 PR",
      kr: "PR \uD69F\uC218",
      nl: "Aantal PR's",
      "pt-pt": "Total de PRs",
      "pt-br": "Total de PRs",
      np: "\u0915\u0941\u0932 PRs",
      el: "\u03A3\u03CD\u03BD\u03BF\u03BB\u03BF PRs",
      ro: "Total PR-uri",
      ru: "\u0412\u0441\u0435\u0433\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u043E\u0432 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439",
      "uk-ua": "\u0412\u0441\u044C\u043E\u0433\u043E \u0437\u0430\u043F\u0438\u0442\u0456\u0432 \u043D\u0430 \u0437\u043B\u0438\u0442\u0442\u044F",
      id: "Total Permintaan Tarik",
      ml: "\u0D06\u0D15\u0D46 \u0D2A\u0D41\u0D7E \u0D05\u0D2D\u0D4D\u0D2F\u0D7C\u0D24\u0D4D\u0D25\u0D28\u0D15\u0D7E",
      my: "\u1005\u102F\u1005\u102F\u1015\u1031\u102B\u1004\u103A\u1038 PR \u1019\u103B\u102C\u1038",
      ta: `\u0BAE\u0BCA\u0BA4\u0BCD\u0BA4 \u0B87\u0BB4\u0BC1\u0B95\u0BCD\u0B95\u0BC1\u0BAE\u0BCD \u0B95\u0BCB\u0BB0\u0BBF\u0B95\u0BCD\u0B95\u0BC8\u0B95\u0BB3\u0BCD`,
      sk: "V\u0161etky PR",
      tr: "Toplam PR",
      pl: "Wszystkie PR-y",
      uz: "'Pull Request'lar",
      vi: "T\u1ED5ng S\u1ED1 PR",
      se: "Totalt antal PR",
      he: "\u05E1\u05DA \u05DB\u05DC \u05D4\u05BEPRs",
      fil: "Kabuuang PRs",
      th: "PR \u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14",
      sr: "\u0423\u043A\u0443\u043F\u043D\u043E PR-\u043E\u0432\u0430",
      "sr-latn": "Ukupno PR-ova",
      no: "Totalt antall PR"
    },
    "statcard.issues": {
      en: "Total Issues",
      ar: "\u0645\u062C\u0645\u0648\u0639 \u0627\u0644\u062A\u062D\u0633\u064A\u0646\u0627\u062A",
      az: "\xDCmumi Problem",
      ca: "Issues totals",
      cn: "\u63D0\u51FA\u7684 issue \u603B\u6570",
      "zh-tw": "\u63D0\u51FA\u554F\u984C\u6578\u91CF\uFF08Issue\uFF09",
      cs: "Celkem probl\xE9m\u016F",
      de: "Anzahl Issues",
      sw: "Masuala Ibuka",
      ur: "\u06A9\u0644 \u0645\u0633\u0627\u0626\u0644",
      bg: "\u0411\u0440\u043E\u0439 \u0432\u044A\u043F\u0440\u043E\u0441\u0438",
      bn: "\u09B8\u09B0\u09CD\u09AC\u09AE\u09CB\u099F Issue",
      es: "Issues totales",
      fa: "\u0645\u062C\u0645\u0648\u0639 \u0645\u0633\u0627\u0626\u0644",
      fi: "Yhteens\xE4 ongelmat",
      fr: "Nombre total d'incidents",
      hi: "\u0915\u0941\u0932 \u092E\u0941\u0926\u094D\u0926\u0947(Issues)",
      sa: "\u0915\u0941\u0932-\u0938\u092E\u0938\u094D\u092F\u093E\u0903",
      hu: "\xD6sszes hibajegy",
      it: "Segnalazioni totali",
      ja: "\u5408\u8A08 issue",
      kr: "\uC774\uC288 \uAC1C\uC218",
      nl: "Aantal kwesties",
      "pt-pt": "Total de Issues",
      "pt-br": "Total de Issues",
      np: "\u0915\u0941\u0932 \u092E\u0941\u0926\u094D\u0926\u093E\u0939\u0930\u0942",
      el: "\u03A3\u03CD\u03BD\u03BF\u03BB\u03BF \u0396\u03B7\u03C4\u03B7\u03BC\u03AC\u03C4\u03C9\u03BD",
      ro: "Total Issue-uri",
      ru: "\u0412\u0441\u0435\u0433\u043E \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432",
      "uk-ua": "\u0412\u0441\u044C\u043E\u0433\u043E \u043F\u0438\u0442\u0430\u043D\u044C",
      id: "Total Masalah Dilaporkan",
      ml: "\u0D06\u0D15\u0D46 \u0D2A\u0D4D\u0D30\u0D36\u0D4D\u0D28\u0D19\u0D4D\u0D19\u0D7E",
      my: "\u1005\u102F\u1005\u102F\u1015\u1031\u102B\u1004\u103A\u1038\u1015\u103C\u103F\u1014\u102C\u1019\u103B\u102C\u1038",
      ta: `\u0BAE\u0BCA\u0BA4\u0BCD\u0BA4 \u0B9A\u0BBF\u0B95\u0BCD\u0B95\u0BB2\u0BCD\u0B95\u0BB3\u0BCD`,
      sk: "V\u0161etky probl\xE9my",
      tr: "Toplam Hata",
      pl: "Wszystkie problemy",
      uz: "'Issue'lar",
      vi: "T\u1ED5ng S\u1ED1 V\u1EA5n \u0110\u1EC1",
      se: "Total antal issues",
      he: "\u05E1\u05DA \u05DB\u05DC \u05D4\u05BEissues",
      fil: "Kabuuang mga Isyu",
      th: "Issue \u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14",
      sr: "\u0423\u043A\u0443\u043F\u043D\u043E \u043F\u0440\u0438\u0458\u0430\u0432\u0459\u0435\u043D\u0438\u0445 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0430",
      "sr-latn": "Ukupno prijavljenih problema",
      no: "Totalt antall issues"
    },
    "statcard.contribs": {
      en: "Contributed to (last year)",
      ar: "\u0633\u0627\u0647\u0645 \u0641\u064A (\u0627\u0644\u0639\u0627\u0645 \u0627\u0644\u0645\u0627\u0636\u064A)",
      az: "T\xF6hf\u0259 verdi (\xF6t\u0259n il)",
      ca: "Contribucions (l'any passat)",
      cn: "\u8D21\u732E\u7684\u9879\u76EE\u6570\uFF08\u53BB\u5E74\uFF09",
      "zh-tw": "\u53C3\u8207\u9805\u76EE\u6578\u91CF\uFF08\u53BB\u5E74\uFF09",
      cs: "P\u0159isp\u011Bl k (minul\xFD rok)",
      de: "Beigetragen zu (letztes Jahr)",
      sw: "Idadi ya michango (mwaka mzima)",
      ur: "\u067E\u0686\u06BE\u0644\u06D2 \u0633\u0627\u0644 \u0645\u06CC\u06BA \u062A\u0639\u0627\u0648\u0646 \u06A9\u06CC\u0627",
      bg: "\u041F\u0440\u0438\u043D\u043E\u0441\u0438 (\u0437\u0430 \u0438\u0437\u043C\u0438\u043D\u0430\u043B\u0430\u0442\u0430 \u0433\u043E\u0434\u0438\u043D\u0430)",
      bn: "\u0985\u09AC\u09A6\u09BE\u09A8 (\u0997\u09A4 \u09AC\u099B\u09B0)",
      es: "Contribuciones en (el a\xF1o pasado)",
      fa: "\u0645\u0634\u0627\u0631\u06A9\u062A \u062F\u0631 (\u0633\u0627\u0644 \u06AF\u0630\u0634\u062A\u0647)",
      fi: "Osallistunut (viime vuonna)",
      fr: "Contribu\xE9 \xE0 (l'ann\xE9e derni\xE8re)",
      hi: "(\u092A\u093F\u091B\u0932\u0947 \u0935\u0930\u094D\u0937) \u092E\u0947\u0902 \u092F\u094B\u0917\u0926\u093E\u0928 \u0926\u093F\u092F\u093E",
      sa: "(\u0917\u0924\u0947 \u0935\u0930\u094D\u0937\u0947) \u092F\u094B\u0917\u0926\u093E\u0928\u092E\u094D \u0915\u0943\u0924\u092E\u094D",
      hu: "Hozz\xE1j\xE1rul\xE1sok (tavaly)",
      it: "Ha contribuito a (l'anno scorso)",
      ja: "\u8CA2\u732E\u3057\u305F\u30EA\u30DD\u30B8\u30C8\u30EA \uFF08\u6628\u5E74\uFF09",
      kr: "(\uC791\uB144) \uAE30\uC5EC",
      nl: "Bijgedragen aan (vorig jaar)",
      "pt-pt": "Contribuiu em (ano passado)",
      "pt-br": "Contribuiu para (ano passado)",
      np: "\u0915\u0941\u0932 \u092F\u094B\u0917\u0926\u093E\u0928\u0939\u0930\u0942 (\u0917\u0924 \u0935\u0930\u094D\u0937)",
      el: "\u03A3\u03C5\u03BD\u03B5\u03B9\u03C3\u03C6\u03AD\u03C1\u03B8\u03B7\u03BA\u03B5 \u03C3\u03B5 (\u03C0\u03AD\u03C1\u03C5\u03C3\u03B9)",
      ro: "Total Contribuiri",
      ru: "\u0412\u043D\u0435\u0441\u0435\u043D\u043E \u0432\u043A\u043B\u0430\u0434\u0430 (\u0437\u0430 \u043F\u0440\u043E\u0448\u043B\u044B\u0439 \u0433\u043E\u0434)",
      "uk-ua": "\u0417\u0440\u043E\u0431\u043B\u0435\u043D\u043E \u0432\u043D\u0435\u0441\u043E\u043A (\u0437\u0430 \u043C\u0438\u043D\u0443\u043B\u0438\u0439 \u0440\u0456\u043A)",
      id: "Berkontribusi ke (tahun lalu)",
      ml: "(\u0D15\u0D34\u0D3F\u0D1E\u0D4D\u0D1E \u0D35\u0D7C\u0D37\u0D24\u0D4D\u0D24\u0D46)\u0D06\u0D15\u0D46 \u0D38\u0D02\u0D2D\u0D3E\u0D35\u0D28\u0D15\u0D7E ",
      my: "\u1021\u1000\u1030\u1021\u100A\u102E\u1015\u1031\u1038\u1001\u1032\u1037\u101E\u100A\u103A (\u1015\u103C\u102E\u1038\u1001\u1032\u1037\u101E\u100A\u1037\u103A\u1014\u103E\u1005\u103A)",
      ta: "(\u0B95\u0B9F\u0BA8\u0BCD\u0BA4 \u0B86\u0BA3\u0BCD\u0B9F\u0BC1) \u0BAA\u0B99\u0BCD\u0B95\u0BB3\u0BBF\u0BA4\u0BCD\u0BA4\u0BA4\u0BC1",
      sk: "\xDA\u010Dasti (minul\xFD rok)",
      tr: "Katk\u0131 Verildi (ge\xE7en y\u0131l)",
      pl: "Kontrybucje (w zesz\u0142ym roku)",
      uz: "Hissa qo\u02BBshgan (o'tgan yili)",
      vi: "\u0110\xE3 \u0110\xF3ng G\xF3p (n\u0103m ngo\xE1i)",
      se: "Bidragit till (f\xF6rra \xE5ret)",
      he: "\u05EA\u05E8\u05DD \u05DC... (\u05E9\u05E0\u05D4 \u05E9\u05E2\u05D1\u05E8\u05D4)",
      fil: "Nag-ambag sa (nakaraang taon)",
      th: "\u0E21\u0E35\u0E2A\u0E48\u0E27\u0E19\u0E23\u0E48\u0E27\u0E21\u0E43\u0E19 (\u0E1B\u0E35\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27)",
      sr: "\u0414\u043E\u043F\u0440\u0438\u043D\u043E\u0441\u0438 (\u043F\u0440\u043E\u0448\u043B\u0430 \u0433\u043E\u0434\u0438\u043D\u0430)",
      "sr-latn": "Doprinosi (pro\u0161la godina)",
      no: "Bidro til (i fjor)"
    },
    "statcard.reviews": {
      en: "Total PRs Reviewed",
      ar: "\u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0633\u062D\u0628 \u0627\u0644\u062A\u064A \u062A\u0645 \u0645\u0631\u0627\u062C\u0639\u062A\u0647\u0627",
      az: "N\u0259z\u0259rd\u0259n Ke\xE7iril\u0259n \xDCmumi PR",
      ca: "Total de PRs revisats",
      cn: "\u5BA1\u67E5\u7684 PR \u603B\u6570",
      "zh-tw": "\u5BE9\u6838\u7684 PR \u7E3D\u8A08",
      cs: "Celkov\xFD po\u010Det PR",
      de: "Insgesamt \xFCberpr\xFCfte PRs",
      sw: "Idadi ya PRs zilizopitiliwa upya",
      ur: "\u06A9\u0644 \u067E\u06CC \u0622\u0631\u0632 \u06A9\u0627 \u062C\u0627\u0626\u0632\u06C1 \u0644\u06CC\u0627",
      bg: "\u0420\u0430\u0437\u0433\u043B\u0435\u0434\u0430\u043D\u0438 \u0437\u0430\u044F\u0432\u043A\u0438 \u0437\u0430 \u0438\u0437\u0442\u0435\u0433\u043B\u044F\u043D\u0435",
      bn: "\u09B8\u09B0\u09CD\u09AC\u09AE\u09CB\u099F \u09AA\u09C1\u09A8\u09B0\u09BE\u09B2\u09CB\u099A\u09A8\u09BE \u0995\u09B0\u09BE PR",
      es: "PR totales revisados",
      fa: "\u0645\u062C\u0645\u0648\u0639 \u062F\u0631\u062E\u0648\u0627\u0633\u062A\u200C\u0647\u0627\u06CC \u0627\u062F\u063A\u0627\u0645 \u0628\u0631\u0631\u0633\u06CC\u200C\u0634\u062F\u0647",
      fi: "Yhteens\xE4 tarkastettuja PR:it\xE4",
      fr: "Nombre total de PR examin\xE9s",
      hi: "\u0915\u0941\u0932 PRs \u0915\u0940 \u0938\u092E\u0940\u0915\u094D\u0937\u093E \u0915\u0940 \u0917\u0908",
      sa: "\u0938\u092E\u0940\u0915\u094D\u0937\u093F\u0924\u093E\u0903 \u0915\u0941\u0932-\u092A\u0940\u0906\u0930",
      hu: "\xD6sszes ellen\u0151rz\xF6tt PR",
      it: "PR totali esaminati",
      ja: "\u30EC\u30D3\u30E5\u30FC\u3055\u308C\u305F PR \u306E\u7DCF\u6570",
      kr: "\uAC80\uD1A0\uB41C \uCD1D PR",
      nl: "Totaal beoordeelde PR's",
      "pt-pt": "Total de PRs revistos",
      "pt-br": "Total de PRs revisados",
      np: "\u0915\u0941\u0932 \u092A\u0940\u0906\u0930 \u0938\u092E\u0940\u0915\u094D\u0937\u093F\u0924",
      el: "\u03A3\u03CD\u03BD\u03BF\u03BB\u03BF \u0391\u03BD\u03B1\u03B8\u03B5\u03C9\u03C1\u03B7\u03BC\u03AD\u03BD\u03C9\u03BD PR",
      ro: "Total PR-uri Revizuite",
      ru: "\u0412\u0441\u0435\u0433\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u043E\u0432 \u043F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u043E",
      "uk-ua": "\u0412\u0441\u044C\u043E\u0433\u043E \u0437\u0430\u043F\u0438\u0442\u0456\u0432 \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u0435\u043D\u043E",
      id: "Total PR yang Direview",
      ml: "\u0D06\u0D15\u0D46 \u0D2A\u0D41\u0D7E \u0D05\u0D35\u0D32\u0D4B\u0D15\u0D28\u0D19\u0D4D\u0D19\u0D7E",
      my: "\u1005\u102F\u1005\u102F\u1015\u1031\u102B\u1004\u103A\u1038 PR \u1019\u103B\u102C\u1038\u1000\u102D\u102F \u1015\u103C\u1014\u103A\u101C\u100A\u103A\u101E\u102F\u1036\u1038\u101E\u1015\u103A\u1001\u1032\u1037\u1019\u103E\u102F",
      ta: "\u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BBE\u0BAF\u0BCD\u0BB5\u0BC1 \u0B9A\u0BC6\u0BAF\u0BCD\u0BAF\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F \u0BAE\u0BCA\u0BA4\u0BCD\u0BA4 \u0B87\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BB2\u0BCD \u0B95\u0BCB\u0BB0\u0BBF\u0B95\u0BCD\u0B95\u0BC8\u0B95\u0BB3\u0BCD",
      sk: "Celkov\xFD po\u010Det PR",
      tr: "\u0130ncelenen toplam PR",
      pl: "\u0141\u0105cznie sprawdzonych PR",
      uz: "Ko\u02BBrib chiqilgan PR-lar soni",
      vi: "T\u1ED5ng S\u1ED1 PR \u0110\xE3 Xem X\xE9t",
      se: "Totalt antal granskade PR",
      he: "\u05E1\u05DA \u05DB\u05DC \u05D4\u05BEPRs \u05E9\u05E0\u05E1\u05E8\u05E7\u05D5",
      fil: "Kabuuang PR na Na-review",
      th: "\u0E23\u0E35\u0E27\u0E34\u0E27 PR \u0E41\u0E25\u0E49\u0E27\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14",
      sr: "\u0423\u043A\u0443\u043F\u043D\u043E \u043F\u0440\u0435\u0433\u043B\u0435\u0434\u0430\u043D\u0438\u0445 PR-\u043E\u0432\u0430",
      "sr-latn": "Ukupno pregledanih PR-ova",
      no: "Totalt antall vurderte PR"
    },
    "statcard.discussions-started": {
      en: "Total Discussions Started",
      ar: "\u0645\u062C\u0645\u0648\u0639 \u0627\u0644\u0645\u0646\u0627\u0642\u0634\u0627\u062A \u0627\u0644\u062A\u064A \u0628\u062F\u0623\u0647\u0627",
      az: "Ba\u015Flad\u0131lan \xDCmumi M\xFCzakir\u0259",
      ca: "Discussions totals iniciades",
      cn: "\u53D1\u8D77\u7684\u8BA8\u8BBA\u603B\u6570",
      "zh-tw": "\u767C\u8D77\u7684\u8A0E\u8AD6\u7E3D\u6578",
      cs: "Celkem zah\xE1jen\xFDch diskus\xED",
      de: "Gesamt gestartete Diskussionen",
      sw: "Idadi ya majadiliano yaliyoanzishwa",
      ur: "\u06A9\u0644 \u0645\u0628\u0627\u062D\u062B\u06D2 \u0634\u0631\u0648\u0639 \u06A9\u06CC\u06D2",
      bg: "\u0417\u0430\u043F\u043E\u0447\u043D\u0430\u0442\u0438 \u0434\u0438\u0441\u043A\u0443\u0441\u0438\u0438",
      bn: "\u09B8\u09B0\u09CD\u09AC\u09AE\u09CB\u099F \u0986\u09B2\u09CB\u099A\u09A8\u09BE \u09B6\u09C1\u09B0\u09C1",
      es: "Discusiones totales iniciadas",
      fa: "\u0645\u062C\u0645\u0648\u0639 \u0628\u062D\u062B\u200C\u0647\u0627\u06CC \u0622\u063A\u0627\u0632\u0634\u062F\u0647",
      fi: "Aloitetut keskustelut yhteens\xE4",
      fr: "Nombre total de discussions lanc\xE9es",
      hi: "\u0915\u0941\u0932 \u091A\u0930\u094D\u091A\u093E\u090F\u0901 \u0936\u0941\u0930\u0942 \u0939\u0941\u0908\u0902",
      sa: "\u092A\u094D\u0930\u093E\u0930\u092C\u094D\u0927\u093E\u0903 \u0915\u0941\u0932-\u091A\u0930\u094D\u091A\u093E\u0903",
      hu: "\xD6sszes megkezdett megbesz\xE9l\xE9s",
      it: "Discussioni totali avviate",
      ja: "\u958B\u59CB\u3055\u308C\u305F\u30C7\u30A3\u30B9\u30AB\u30C3\u30B7\u30E7\u30F3\u306E\u7DCF\u6570",
      kr: "\uC2DC\uC791\uB41C \uD1A0\uB860 \uCD1D \uC218",
      nl: "Totaal gestarte discussies",
      "pt-pt": "Total de Discuss\xF5es Iniciadas",
      "pt-br": "Total de Discuss\xF5es Iniciadas",
      np: "\u0915\u0941\u0932 \u091A\u0930\u094D\u091A\u093E \u0938\u0941\u0930\u0941",
      el: "\u03A3\u03CD\u03BD\u03BF\u03BB\u03BF \u03A3\u03C5\u03B6\u03B7\u03C4\u03AE\u03C3\u03B5\u03C9\u03BD \u03C0\u03BF\u03C5 \u039E\u03B5\u03BA\u03AF\u03BD\u03B7\u03C3\u03B1\u03BD",
      ro: "Total Discu\u021Bii \xCEncepute",
      ru: "\u0412\u0441\u0435\u0433\u043E \u043D\u0430\u0447\u0430\u0442\u044B\u0445 \u043E\u0431\u0441\u0443\u0436\u0434\u0435\u043D\u0438\u0439",
      "uk-ua": "\u0412\u0441\u044C\u043E\u0433\u043E \u0440\u043E\u0437\u043F\u043E\u0447\u0430\u0442\u0438\u0445 \u0434\u0438\u0441\u043A\u0443\u0441\u0456\u0439",
      id: "Total Diskusi Dimulai",
      ml: "\u0D06\u0D30\u0D02\u0D2D\u0D3F\u0D1A\u0D4D\u0D1A \u0D06\u0D32\u0D4B\u0D1A\u0D28\u0D15\u0D7E",
      my: "\u1005\u102F\u1005\u102F\u1015\u1031\u102B\u1004\u103A\u1038 \u1005\u1010\u1004\u103A\u1001\u1032\u1037\u101E\u1031\u102C \u1006\u103D\u1031\u1038\u1014\u103D\u1031\u1038\u1019\u103E\u102F\u1019\u103B\u102C\u1038",
      ta: "\u0BAE\u0BCA\u0BA4\u0BCD\u0BA4 \u0BB5\u0BBF\u0BB5\u0BBE\u0BA4\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BA4\u0BCA\u0B9F\u0B99\u0BCD\u0B95\u0BBF\u0BA9",
      sk: "Celkov\xFD po\u010Det za\u010Dat\xFDch diskusi\xED",
      tr: "Ba\u015Flat\u0131lan Toplam Tart\u0131\u015Fma",
      pl: "\u0141\u0105cznie rozpocz\u0119tych dyskusji",
      uz: "Boshlangan muzokaralar soni",
      vi: "T\u1ED5ng S\u1ED1 Th\u1EA3o Lu\u1EADn B\u1EAFt \u0110\u1EA7u",
      se: "Totalt antal diskussioner startade",
      he: "\u05E1\u05DA \u05DB\u05DC \u05D4\u05D3\u05D9\u05D5\u05E0\u05D9\u05DD \u05E9\u05D4\u05D5\u05EA\u05D7\u05DC\u05D5",
      fil: "Kabuuang mga Diskusyon na Sinimulan",
      th: "\u0E40\u0E23\u0E34\u0E48\u0E21\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D\u0E2A\u0E19\u0E17\u0E19\u0E32\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14",
      sr: "\u0423\u043A\u0443\u043F\u043D\u043E \u043F\u043E\u043A\u0440\u0435\u043D\u0443\u0442\u0438\u0445 \u0434\u0438\u0441\u043A\u0443\u0441\u0438\u0458\u0430",
      "sr-latn": "Ukupno pokrenutih diskusija",
      no: "Totalt antall startede diskusjoner"
    },
    "statcard.discussions-answered": {
      en: "Total Discussions Answered",
      ar: "\u0645\u062C\u0645\u0648\u0639 \u0627\u0644\u0645\u0646\u0627\u0642\u0634\u0627\u062A \u0627\u0644\u0645\u064F\u062C\u0627\u0628\u0629",
      az: "Cavabland\u0131r\u0131lan \xDCmumi M\xFCzakir\u0259",
      ca: "Discussions totals respostes",
      cn: "\u56DE\u590D\u7684\u8BA8\u8BBA\u603B\u6570",
      "zh-tw": "\u56DE\u8986\u8A0E\u8AD6\u7E3D\u8A08",
      cs: "Celkem zodpov\u011Bzen\xFDch diskus\xED",
      de: "Gesamt beantwortete Diskussionen",
      sw: "Idadi ya majadiliano yaliyojibiwa",
      ur: "\u06A9\u0644 \u0645\u0628\u0627\u062D\u062B\u06D2 \u062C\u0648\u0627\u0628 \u062F\u06CC\u06D2",
      bg: "\u041E\u0442\u0433\u043E\u0432\u043E\u0440\u0435\u043D\u0438 \u0434\u0438\u0441\u043A\u0443\u0441\u0438\u0438",
      bn: "\u09B8\u09B0\u09CD\u09AC\u09AE\u09CB\u099F \u0986\u09B2\u09CB\u099A\u09A8\u09BE \u0989\u09A4\u09CD\u09A4\u09B0",
      es: "Discusiones totales respondidas",
      fa: "\u0645\u062C\u0645\u0648\u0639 \u0628\u062D\u062B\u200C\u0647\u0627\u06CC \u067E\u0627\u0633\u062E\u200C\u062F\u0627\u062F\u0647\u200C\u0634\u062F\u0647",
      fi: "Vastatut keskustelut yhteens\xE4",
      fr: "Nombre total de discussions r\xE9pondues",
      hi: "\u0915\u0941\u0932 \u091A\u0930\u094D\u091A\u093E\u0913\u0902 \u0915\u0947 \u0909\u0924\u094D\u0924\u0930",
      sa: "\u0909\u0924\u094D\u0924\u0930\u093F\u0924\u093E\u0903 \u0915\u0941\u0932-\u091A\u0930\u094D\u091A\u093E\u0903",
      hu: "\xD6sszes megv\xE1laszolt megbesz\xE9l\xE9s",
      it: "Discussioni totali risposte",
      ja: "\u56DE\u7B54\u3055\u308C\u305F\u30C7\u30A3\u30B9\u30AB\u30C3\u30B7\u30E7\u30F3\u306E\u7DCF\u6570",
      kr: "\uB2F5\uBCC0\uB41C \uD1A0\uB860 \uCD1D \uC218",
      nl: "Totaal beantwoorde discussies",
      "pt-pt": "Total de Discuss\xF5es Respondidas",
      "pt-br": "Total de Discuss\xF5es Respondidas",
      np: "\u0915\u0941\u0932 \u091A\u0930\u094D\u091A\u093E \u0909\u0924\u094D\u0924\u0930",
      el: "\u03A3\u03CD\u03BD\u03BF\u03BB\u03BF \u03A3\u03C5\u03B6\u03B7\u03C4\u03AE\u03C3\u03B5\u03C9\u03BD \u03C0\u03BF\u03C5 \u0391\u03C0\u03B1\u03BD\u03C4\u03AE\u03B8\u03B7\u03BA\u03B1\u03BD",
      ro: "Total R\u0103spunsuri La Discu\u021Bii",
      ru: "\u0412\u0441\u0435\u0433\u043E \u043E\u0442\u0432\u0435\u0447\u0435\u043D\u043D\u044B\u0445 \u043E\u0431\u0441\u0443\u0436\u0434\u0435\u043D\u0438\u0439",
      "uk-ua": "\u0412\u0441\u044C\u043E\u0433\u043E \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0435\u0439 \u043D\u0430 \u0434\u0438\u0441\u043A\u0443\u0441\u0456\u0457",
      id: "Total Diskusi Dibalas",
      ml: "\u0D09\u0D24\u0D4D\u0D24\u0D30\u0D02 \u0D28\u0D7D\u0D15\u0D3F\u0D2F \u0D06\u0D32\u0D4B\u0D1A\u0D28\u0D15\u0D7E",
      my: "\u1005\u102F\u1005\u102F\u1015\u1031\u102B\u1004\u103A\u1038 \u1015\u103C\u1014\u103A\u101C\u100A\u103A\u1016\u103C\u1031\u1000\u103C\u102C\u1038\u1001\u1032\u1037\u101E\u1031\u102C \u1006\u103D\u1031\u1038\u1014\u103D\u1031\u1038\u1019\u103E\u102F\u1019\u103B\u102C\u1038",
      ta: "\u0BAA\u0BA4\u0BBF\u0BB2\u0BB3\u0BBF\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F \u0BAE\u0BCA\u0BA4\u0BCD\u0BA4 \u0BB5\u0BBF\u0BB5\u0BBE\u0BA4\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
      sk: "Celkov\xFD po\u010Det zodpovedan\xFDch diskusi\xED",
      tr: "Toplam Cevaplanan Tart\u0131\u015Fma",
      pl: "\u0141\u0105cznie odpowiedzianych dyskusji",
      uz: "Javob berilgan muzokaralar soni",
      vi: "T\u1ED5ng S\u1ED1 Th\u1EA3o Lu\u1EADn \u0110\xE3 Tr\u1EA3 L\u1EDDi",
      se: "Totalt antal diskussioner besvarade",
      he: "\u05E1\u05DA \u05DB\u05DC \u05D4\u05D3\u05D9\u05D5\u05E0\u05D9\u05DD \u05E9\u05E0\u05E2\u05E0\u05D5",
      fil: "Kabuuang mga Diskusyon na Sinagot",
      th: "\u0E15\u0E2D\u0E1A\u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D\u0E2A\u0E19\u0E17\u0E19\u0E32\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14",
      sr: "\u0423\u043A\u0443\u043F\u043D\u043E \u043E\u0434\u0433\u043E\u0432\u043E\u0440\u0435\u043D\u0438\u0445 \u0434\u0438\u0441\u043A\u0443\u0441\u0438\u0458\u0430",
      "sr-latn": "Ukupno odgovorenih diskusija",
      no: "Totalt antall besvarte diskusjoner"
    },
    "statcard.prs-merged": {
      en: "Total PRs Merged",
      ar: "\u0645\u062C\u0645\u0648\u0639 \u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0633\u062D\u0628 \u0627\u0644\u0645\u064F\u062F\u0645\u062C\u0629",
      az: "Birl\u0259\u015Fdirilmi\u015F \xDCmumi PR",
      ca: "PRs totals fusionats",
      cn: "\u5408\u5E76\u7684 PR \u603B\u6570",
      "zh-tw": "\u5408\u4F75\u7684 PR \u7E3D\u8A08",
      cs: "Celkem slou\u010Den\xFDch PR",
      de: "Insgesamt zusammengef\xFChrte PRs",
      sw: "Idadi ya PRs zilizounganishwa",
      ur: "\u06A9\u0644 \u067E\u06CC \u0622\u0631\u0632 \u0636\u0645 \u06A9\u06CC\u06D2",
      bg: "\u0421\u043B\u044F\u0442\u0438 \u0437\u0430\u044F\u0432\u043A\u0438 \u0437\u0430 \u0438\u0437\u0442\u0435\u0433\u043B\u044F\u043D\u0438\u044F",
      bn: "\u09B8\u09B0\u09CD\u09AC\u09AE\u09CB\u099F PR \u098F\u0995\u09A4\u09CD\u09B0\u09C0\u0995\u09C3\u09A4",
      es: "PR totales fusionados",
      fa: "\u0645\u062C\u0645\u0648\u0639 \u062F\u0631\u062E\u0648\u0627\u0633\u062A\u200C\u0647\u0627\u06CC \u0627\u062F\u063A\u0627\u0645 \u0634\u062F\u0647",
      fi: "Yhteens\xE4 yhdistetyt PR:t",
      fr: "Nombre total de PR fusionn\xE9s",
      hi: "\u0915\u0941\u0932 PR \u0915\u093E \u0935\u093F\u0932\u092F",
      sa: "\u0935\u093F\u0932\u0940\u0928\u093E\u0903 \u0915\u0941\u0932-\u092A\u0940\u0906\u0930",
      hu: "\xD6sszes egyes\xEDtett PR",
      it: "PR totali uniti",
      ja: "\u30DE\u30FC\u30B8\u3055\u308C\u305F PR \u306E\u7DCF\u6570",
      kr: "\uBCD1\uD569\uB41C \uCD1D PR",
      nl: "Totaal samengevoegde PR's",
      "pt-pt": "Total de PRs Fundidos",
      "pt-br": "Total de PRs Integrados",
      np: "\u0915\u0941\u0932 \u0935\u093F\u0932\u092F\u093F\u0924 PRs",
      el: "\u03A3\u03CD\u03BD\u03BF\u03BB\u03BF \u03A3\u03C5\u03B3\u03C7\u03C9\u03BD\u03B5\u03C5\u03BC\u03AD\u03BD\u03C9\u03BD PR",
      ro: "Total PR-uri Fuzionate",
      ru: "\u0412\u0441\u0435\u0433\u043E \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u0451\u043D\u043D\u044B\u0445 \u0437\u0430\u043F\u0440\u043E\u0441\u043E\u0432",
      "uk-ua": "\u0412\u0441\u044C\u043E\u0433\u043E \u043E\u0431'\u0454\u0434\u043D\u0430\u043D\u0438\u0445 \u0437\u0430\u043F\u0438\u0442\u0456\u0432",
      id: "Total PR Digabungkan",
      my: "\u1005\u102F\u1005\u102F\u1015\u1031\u102B\u1004\u103A\u1038 \u1015\u1031\u102B\u1004\u103A\u1038\u1005\u100A\u103A\u1038\u1001\u1032\u1037\u101E\u1031\u102C PR \u1019\u103B\u102C\u1038",
      ta: "\u0B87\u0BA3\u0BC8\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F \u0BAE\u0BCA\u0BA4\u0BCD\u0BA4 PR\u0B95\u0BB3\u0BCD",
      sk: "Celkov\xFD po\u010Det zl\xFA\u010Den\xFDch PR",
      tr: "Toplam Birle\u015Ftirilmi\u015F PR",
      pl: "\u0141\u0105cznie po\u0142\u0105czonych PR",
      uz: "Birlangan PR-lar soni",
      vi: "T\u1ED5ng S\u1ED1 PR \u0110\xE3 H\u1EE3p Nh\u1EA5t",
      se: "Totalt antal sammanfogade PR",
      he: "\u05E1\u05DA \u05DB\u05DC \u05D4\u05BEPRs \u05E9\u05E9\u05D5\u05DC\u05D1\u05D5",
      fil: "Kabuuang mga PR na Pinagsama",
      th: "PR \u0E17\u0E35\u0E48\u0E16\u0E39\u0E01 Merged \u0E41\u0E25\u0E49\u0E27\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14",
      sr: "\u0423\u043A\u0443\u043F\u043D\u043E \u0441\u043F\u043E\u0458\u0435\u043D\u0438\u0445 PR-\u043E\u0432\u0430",
      "sr-latn": "Ukupno spojenih PR-ova",
      no: "Totalt antall sammensl\xE5tte PR"
    },
    "statcard.prs-merged-percentage": {
      en: "Merged PRs Percentage",
      ar: "\u0646\u0633\u0628\u0629 \u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0633\u062D\u0628 \u0627\u0644\u0645\u064F\u062F\u0645\u062C\u0629",
      az: "Birl\u0259\u015Fdirilmi\u015F PR-lar\u0131n Faizi",
      ca: "Percentatge de PRs fusionats",
      cn: "\u88AB\u5408\u5E76\u7684 PR \u5360\u6BD4",
      "zh-tw": "\u5408\u4F75\u7684 PR \u767E\u5206\u6BD4",
      cs: "Slou\u010Den\xE9 PRs v procentech",
      de: "Zusammengef\xFChrte PRs in Prozent",
      sw: "Asilimia ya PRs zilizounganishwa",
      ur: "\u0636\u0645 \u06A9\u06CC\u06D2 \u06AF\u0626\u06D2 \u067E\u06CC \u0622\u0631\u0632 \u06A9\u06CC \u0634\u0631\u062D",
      bg: "\u041F\u0440\u043E\u0446\u0435\u043D\u0442 \u0441\u043B\u044F\u0442\u0438 \u0437\u0430\u044F\u0432\u043A\u0438 \u0437\u0430 \u0438\u0437\u0442\u0435\u0433\u043B\u044F\u043D\u0438\u044F",
      bn: "PR \u098F\u0995\u09A4\u09CD\u09B0\u09C0\u0995\u09B0\u09A3\u09C7\u09B0 \u09B6\u09A4\u09BE\u0982\u09B6",
      es: "Porcentaje de PR fusionados",
      fa: "\u062F\u0631\u0635\u062F \u062F\u0631\u062E\u0648\u0627\u0633\u062A\u200C\u0647\u0627\u06CC \u0627\u062F\u063A\u0627\u0645\u200C\u0634\u062F\u0647",
      fi: "Yhdistettyjen PR:ien prosentti",
      fr: "Pourcentage de PR fusionn\xE9s",
      hi: "\u092E\u0930\u094D\u091C \u0915\u093F\u090F \u0917\u090F PRs \u092A\u094D\u0930\u0924\u093F\u0936\u0924",
      sa: "\u0935\u093F\u0932\u0940\u0928-\u092A\u0940\u0906\u0930 \u092A\u094D\u0930\u0924\u093F\u0936\u0924\u092E\u094D",
      hu: "Egyes\xEDtett PR-k sz\xE1zal\xE9ka",
      it: "Percentuale di PR uniti",
      ja: "\u30DE\u30FC\u30B8\u3055\u308C\u305F PR \u306E\u5272\u5408",
      kr: "\uBCD1\uD569\uB41C PR\uC758 \uBE44\uC728",
      nl: "Percentage samengevoegde PR's",
      "pt-pt": "Percentagem de PRs Fundidos",
      "pt-br": "Porcentagem de PRs Integrados",
      np: "PR \u092E\u0930\u094D\u091C \u0917\u0930\u093F\u090F\u0915\u094B \u092A\u094D\u0930\u0924\u093F\u0936\u0924",
      el: "\u03A0\u03BF\u03C3\u03BF\u03C3\u03C4\u03CC \u03A3\u03C5\u03B3\u03C7\u03C9\u03BD\u03B5\u03C5\u03BC\u03AD\u03BD\u03C9\u03BD PR",
      ro: "Procentaj PR-uri Fuzionate",
      ru: "\u041F\u0440\u043E\u0446\u0435\u043D\u0442 \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u0451\u043D\u043D\u044B\u0445 \u0437\u0430\u043F\u0440\u043E\u0441\u043E\u0432",
      "uk-ua": "\u0412\u0456\u0434\u0441\u043E\u0442\u043E\u043A \u043E\u0431'\u0454\u0434\u043D\u0430\u043D\u0438\u0445 \u0437\u0430\u043F\u0438\u0442\u0456\u0432",
      id: "Persentase PR Digabungkan",
      my: "PR \u1019\u103B\u102C\u1038\u1000\u102D\u102F \u1015\u1031\u102B\u1004\u103A\u1038\u1005\u100A\u103A\u1038\u1001\u1032\u1037\u101E\u1031\u102C \u101B\u102C\u1001\u102D\u102F\u1004\u103A\u1014\u103E\u102F\u1014\u103A\u1038",
      ta: "\u0B87\u0BA3\u0BC8\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F PR\u0B95\u0BB3\u0BCD \u0B9A\u0BA4\u0BB5\u0BC0\u0BA4\u0BAE\u0BCD",
      sk: "Percento zl\xFA\u010Den\xFDch PR",
      tr: "Birle\u015Ftirilmi\u015F PR Y\xFCzdesi",
      pl: "Procent po\u0142\u0105czonych PR",
      uz: "Birlangan PR-lar foizi",
      vi: "T\u1EF7 L\u1EC7 PR \u0110\xE3 H\u1EE3p Nh\u1EA5t",
      se: "Procent av sammanfogade PR",
      he: "\u05D0\u05D7\u05D5\u05D6 \u05D4\u05BEPRs \u05E9\u05E9\u05D5\u05DC\u05D1\u05D5",
      fil: "Porsyento ng mga PR na Pinagsama",
      th: "\u0E40\u0E1B\u0E2D\u0E23\u0E4C\u0E40\u0E0B\u0E47\u0E19\u0E15\u0E4C PR \u0E17\u0E35\u0E48\u0E16\u0E39\u0E01 Merged \u0E41\u0E25\u0E49\u0E27\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14",
      sr: "\u041F\u0440\u043E\u0446\u0435\u043D\u0430\u0442 \u0441\u043F\u043E\u0458\u0435\u043D\u0438\u0445 PR-\u043E\u0432\u0430",
      "sr-latn": "Procenat spojenih PR-ova",
      no: "Prosentandel sammensl\xE5tte PR"
    }
  };
}, "statCardLocales");
var repoCardLocales = {
  "repocard.template": {
    en: "Template",
    ar: "\u0642\u0627\u0644\u0628",
    az: "\u015Eablon",
    bg: "\u0428\u0430\u0431\u043B\u043E\u043D",
    bn: "\u099F\u09C7\u09AE\u09AA\u09CD\u09B2\u09C7\u099F",
    ca: "Plantilla",
    cn: "\u6A21\u677F",
    "zh-tw": "\u6A21\u677F",
    cs: "\u0160ablona",
    de: "Vorlage",
    sw: "Kigezo",
    ur: "\u0633\u0627\u0646\u0686\u06C1",
    es: "Plantilla",
    fa: "\u0627\u0644\u06AF\u0648",
    fi: "Malli",
    fr: "Mod\xE8le",
    hi: "\u0916\u093E\u0915\u093E",
    sa: "\u092A\u094D\u0930\u093E\u0930\u0942\u092A\u092E\u094D",
    hu: "Sablon",
    it: "Template",
    ja: "\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8",
    kr: "\uD15C\uD50C\uB9BF",
    nl: "Sjabloon",
    "pt-pt": "Modelo",
    "pt-br": "Modelo",
    np: "\u091F\u0947\u092E\u094D\u092A\u0932\u0947\u091F",
    el: "\u03A0\u03C1\u03CC\u03C4\u03C5\u03C0\u03BF",
    ro: "\u0218ablon",
    ru: "\u0428\u0430\u0431\u043B\u043E\u043D",
    "uk-ua": "\u0428\u0430\u0431\u043B\u043E\u043D",
    id: "Pola",
    ml: "\u0D1F\u0D46\u0D02\u0D2A\u0D4D\u0D32\u0D47\u0D31\u0D4D\u0D31\u0D4D",
    my: "\u1015\u102F\u1036\u1005\u1036",
    ta: `\u0B9F\u0BC6\u0BAE\u0BCD\u0BAA\u0BCD\u0BB3\u0BC7\u0B9F\u0BCD`,
    sk: "\u0160abl\xF3na",
    tr: "\u015Eablon",
    pl: "Szablony",
    uz: "Shablon",
    vi: "M\u1EABu",
    se: "Mall",
    he: "\u05EA\u05D1\u05E0\u05D9\u05EA",
    fil: "Suleras",
    th: "\u0E40\u0E17\u0E21\u0E40\u0E1E\u0E25\u0E15",
    sr: "\u0428\u0430\u0431\u043B\u043E\u043D",
    "sr-latn": "\u0160ablon",
    no: "Mal"
  },
  "repocard.archived": {
    en: "Archived",
    ar: "\u0645\u064F\u0624\u0631\u0634\u0641",
    az: "Arxiv",
    bg: "\u0410\u0440\u0445\u0438\u0432\u0438\u0440\u0430\u043D\u0438",
    bn: "\u0986\u09B0\u09CD\u0995\u09BE\u0987\u09AD\u09A1",
    ca: "Arxivats",
    cn: "\u5DF2\u5F52\u6863",
    "zh-tw": "\u5DF2\u5C01\u5B58",
    cs: "Archivov\xE1no",
    de: "Archiviert",
    sw: "Hifadhiwa kwenye kumbukumbu",
    ur: "\u0645\u062D\u0641\u0648\u0638 \u0634\u062F\u06C1",
    es: "Archivados",
    fa: "\u0628\u0627\u06CC\u06AF\u0627\u0646\u06CC\u200C\u0634\u062F\u0647",
    fi: "Arkistoitu",
    fr: "Archiv\xE9",
    hi: "\u0938\u0902\u0917\u094D\u0930\u0939\u0940\u0924",
    sa: "\u0938\u0902\u0917\u0943\u0939\u0940\u0924\u092E\u094D",
    hu: "Archiv\xE1lt",
    it: "Archiviata",
    ja: "\u30A2\u30FC\u30AB\u30A4\u30D6\u6E08\u307F",
    kr: "\uBCF4\uAD00\uB428",
    nl: "Gearchiveerd",
    "pt-pt": "Arquivados",
    "pt-br": "Arquivados",
    np: "\u0905\u092D\u093F\u0932\u0947\u0916 \u0930\u093E\u0916\u093F\u092F\u094B",
    el: "\u0391\u03C1\u03C7\u03B5\u03B9\u03BF\u03B8\u03B5\u03C4\u03B7\u03BC\u03AD\u03BD\u03B1",
    ro: "Arhivat",
    ru: "\u0410\u0440\u0445\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D",
    "uk-ua": "\u0410\u0440\u0445\u0438\u0432\u043E\u0432\u0430\u043D\u0438\u0439",
    id: "Arsip",
    ml: "\u0D36\u0D47\u0D16\u0D30\u0D3F\u0D1A\u0D4D\u0D1A\u0D24\u0D4D",
    my: "\u101E\u102D\u102F\u101C\u103E\u1031\u102C\u1004\u103A\u1015\u103C\u102E\u1038",
    ta: `\u0B95\u0BBE\u0BAA\u0BCD\u0BAA\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BC1\u0BA4\u0BCD\u0BA4\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1`,
    sk: "Archivovan\xE9",
    tr: "Ar\u015Fiv",
    pl: "Zarchiwizowano",
    uz: "Arxivlangan",
    vi: "\u0110\xE3 L\u01B0u Tr\u1EEF",
    se: "Arkiverade",
    he: "\u05D2\u05E0\u05D5\u05D6",
    fil: "Naka-arkibo",
    th: "\u0E40\u0E01\u0E47\u0E1A\u0E16\u0E32\u0E27\u0E23",
    sr: "\u0410\u0440\u0445\u0438\u0432\u0438\u0440\u0430\u043D\u043E",
    "sr-latn": "Arhivirano",
    no: "Arkivert"
  }
};
var langCardLocales = {
  "langcard.title": {
    en: "Most Used Languages",
    ar: "\u0623\u0643\u062B\u0631 \u0627\u0644\u0644\u063A\u0627\u062A \u0627\u0633\u062A\u062E\u062F\u0627\u0645\u064B\u0627",
    az: "\u018Fn \xC7ox \u0130stifad\u0259 Olunan Dill\u0259r",
    ca: "Llenguatges m\xE9s utilitzats",
    cn: "\u6700\u5E38\u7528\u7684\u8BED\u8A00",
    "zh-tw": "\u6700\u5E38\u7528\u7684\u8A9E\u8A00",
    cs: "Nejpou\u017E\xEDvan\u011Bj\u0161\xED jazyky",
    de: "Meist verwendete Sprachen",
    bg: "\u041D\u0430\u0439-\u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u043D\u0438 \u0435\u0437\u0438\u0446\u0438",
    bn: "\u09B8\u09B0\u09CD\u09AC\u09BE\u09A7\u09BF\u0995 \u09AC\u09CD\u09AF\u09AC\u09B9\u09C3\u09A4 \u09AD\u09BE\u09B7\u09BE \u09B8\u09AE\u09C2\u09B9",
    sw: "Lugha zilizotumika zaidi",
    ur: "\u0633\u0628 \u0633\u06D2 \u0632\u06CC\u0627\u062F\u06C1 \u0627\u0633\u062A\u0639\u0645\u0627\u0644 \u0634\u062F\u06C1 \u0632\u0628\u0627\u0646\u06CC\u06BA",
    es: "Lenguajes m\xE1s usados",
    fa: "\u0632\u0628\u0627\u0646\u200C\u0647\u0627\u06CC \u067E\u0631\u06A9\u0627\u0631\u0628\u0631\u062F",
    fi: "K\xE4ytetyimm\xE4t kielet",
    fr: "Langages les plus utilis\xE9s",
    hi: "\u0938\u0930\u094D\u0935\u093E\u0927\u093F\u0915 \u092A\u094D\u0930\u092F\u0941\u0915\u094D\u0924 \u092D\u093E\u0937\u093E",
    sa: "\u0938\u0930\u094D\u0935\u093E\u0927\u093F\u0915-\u092A\u094D\u0930\u092F\u0941\u0915\u094D\u0924\u093E\u0903 \u092D\u093E\u0937\u093E\u0903",
    hu: "Leggyakrabban haszn\xE1lt nyelvek",
    it: "Linguaggi pi\xF9 utilizzati",
    ja: "\u6700\u3082\u3088\u304F\u4F7F\u3063\u3066\u3044\u308B\u8A00\u8A9E",
    kr: "\uAC00\uC7A5 \uB9CE\uC774 \uC0AC\uC6A9\uB41C \uC5B8\uC5B4",
    nl: "Meest gebruikte talen",
    "pt-pt": "Linguagens mais usadas",
    "pt-br": "Linguagens mais usadas",
    np: "\u0905\u0927\u093F\u0915 \u092A\u094D\u0930\u092F\u094B\u0917 \u0917\u0930\u093F\u090F\u0915\u094B \u092D\u093E\u0937\u093E\u0939\u0930\u0942",
    el: "\u039F\u03B9 \u03C0\u03B5\u03C1\u03B9\u03C3\u03C3\u03CC\u03C4\u03B5\u03C1\u03BF \u03C7\u03C1\u03B7\u03C3\u03B9\u03BC\u03BF\u03C0\u03BF\u03B9\u03BF\u03CD\u03BC\u03B5\u03BD\u03B5\u03C2 \u03B3\u03BB\u03CE\u03C3\u03C3\u03B5\u03C2",
    ro: "Cele Mai Folosite Limbaje",
    ru: "\u041D\u0430\u0438\u0431\u043E\u043B\u0435\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0435 \u044F\u0437\u044B\u043A\u0438",
    "uk-ua": "\u041D\u0430\u0439\u0431\u0456\u043B\u044C\u0448 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u043D\u0456 \u043C\u043E\u0432\u0438",
    id: "Bahasa Yang Paling Banyak Digunakan",
    ml: "\u0D15\u0D42\u0D1F\u0D41\u0D24\u0D7D \u0D09\u0D2A\u0D2F\u0D4B\u0D17\u0D3F\u0D1A\u0D4D\u0D1A \u0D2D\u0D3E\u0D37\u0D15\u0D7E",
    my: "\u1021\u1019\u103B\u102C\u1038\u1006\u102F\u1036\u1038\u1021\u101E\u102F\u1036\u1038\u1015\u103C\u102F\u101E\u1031\u102C\u1018\u102C\u101E\u102C\u1005\u1000\u102C\u1038\u1019\u103B\u102C\u1038",
    ta: `\u0B85\u0BA4\u0BBF\u0B95\u0BAE\u0BCD \u0BAA\u0BAF\u0BA9\u0BCD\u0BAA\u0B9F\u0BC1\u0BA4\u0BCD\u0BA4\u0BAA\u0BCD\u0BAA\u0B9F\u0BC1\u0BAE\u0BCD \u0BAE\u0BCA\u0BB4\u0BBF\u0B95\u0BB3\u0BCD`,
    sk: "Najviac pou\u017E\xEDvan\xE9 jazyky",
    tr: "En \xC7ok Kullan\u0131lan Diller",
    pl: "Najcz\u0119\u015Bciej u\u017Cywane j\u0119zyki",
    uz: "Eng ko\u02BBp ishlatiladigan tillar",
    vi: "Ng\xF4n Ng\u1EEF Th\u01B0\u1EDDng S\u1EED D\u1EE5ng",
    se: "Mest anv\xE4nda spr\xE5ken",
    he: "\u05D4\u05E9\u05E4\u05D5\u05EA \u05D4\u05DB\u05D9 \u05DE\u05E9\u05D5\u05DE\u05E9\u05D5\u05EA",
    fil: "Mga Pinakamadalas na Ginagamit na Wika",
    th: "\u0E20\u0E32\u0E29\u0E32\u0E17\u0E35\u0E48\u0E43\u0E0A\u0E49\u0E1A\u0E48\u0E2D\u0E22\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14",
    sr: "\u041D\u0430\u0458\u043A\u043E\u0440\u0438\u0448\u045B\u0435\u043D\u0438\u0458\u0438 \u0458\u0435\u0437\u0438\u0446\u0438",
    "sr-latn": "Najkori\u0161\u0107eniji jezici",
    no: "Mest brukte spr\xE5k"
  },
  "langcard.nodata": {
    en: "No languages data.",
    ar: "\u0644\u0627 \u062A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A \u0644\u0644\u063A\u0627\u062A.",
    az: "Dil m\u0259lumat\u0131 yoxdur.",
    ca: "Sense dades d'idiomes",
    cn: "\u6CA1\u6709\u8BED\u8A00\u6570\u636E\u3002",
    "zh-tw": "\u6C92\u6709\u8A9E\u8A00\u8CC7\u6599\u3002",
    cs: "\u017D\xE1dn\xE9 jazykov\xE9 \xFAdaje.",
    de: "Keine Sprachdaten.",
    bg: "\u041D\u044F\u043C\u0430 \u0434\u0430\u043D\u043D\u0438 \u0437\u0430 \u0435\u0437\u0438\u0446\u0438",
    bn: "\u0995\u09CB\u09A8 \u09AD\u09BE\u09B7\u09BE\u09B0 \u09A1\u09C7\u099F\u09BE \u09A8\u09C7\u0987\u0964",
    sw: "Hakuna kumbukumbu ya lugha zozote",
    ur: "\u06A9\u0648\u0626\u06CC \u0632\u0628\u0627\u0646 \u06A9\u0627 \u0688\u06CC\u0679\u0627 \u0646\u06C1\u06CC\u06BA\u06D4",
    es: "Sin datos de idiomas.",
    fa: "\u062F\u0627\u062F\u0647\u200C\u0627\u06CC \u0628\u0631\u0627\u06CC \u0632\u0628\u0627\u0646\u200C\u0647\u0627 \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F.",
    fi: "Ei kielitietoja.",
    fr: "Aucune donn\xE9e sur les langues.",
    hi: "\u0915\u094B\u0908 \u092D\u093E\u0937\u093E \u0921\u0947\u091F\u093E \u0928\u0939\u0940\u0902",
    sa: "\u092D\u093E\u0937\u093E-\u0935\u093F\u0935\u0930\u0923\u0902 \u0928\u093E\u0938\u094D\u0924\u093F\u0964",
    hu: "Nincsenek nyelvi adatok.",
    it: "Nessun dato sulle lingue.",
    ja: "\u8A00\u8A9E\u30C7\u30FC\u30BF\u304C\u3042\u308A\u307E\u305B\u3093\u3002",
    kr: "\uC5B8\uC5B4 \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.",
    nl: "Ingen sprogdata.",
    "pt-pt": "Sem dados de linguagens.",
    "pt-br": "Sem dados de linguagens.",
    np: "\u0915\u0941\u0928\u0948 \u092D\u093E\u0937\u093E \u0921\u093E\u091F\u093E \u091B\u0948\u0928\u0964",
    el: "\u0394\u03B5\u03BD \u03C5\u03C0\u03AC\u03C1\u03C7\u03BF\u03C5\u03BD \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03B1 \u03B3\u03BB\u03C9\u03C3\u03C3\u03CE\u03BD.",
    ro: "Lipsesc date despre limb\u0103.",
    ru: "\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u044F\u0437\u044B\u043A\u0430\u0445.",
    "uk-ua": "\u041D\u0435\u043C\u0430\u0454 \u0434\u0430\u043D\u0438\u0445 \u043F\u0440\u043E \u043C\u043E\u0432\u0438.",
    id: "Tidak ada data bahasa.",
    ml: "\u0D2D\u0D3E\u0D37\u0D3E \u0D21\u0D3E\u0D31\u0D4D\u0D31\u0D2F\u0D3F\u0D32\u0D4D\u0D32.",
    my: "\u1012\u1031\u1010\u102C \u1019\u101B\u103E\u102D\u1015\u102B\u104B",
    ta: `\u0BAE\u0BCA\u0BB4\u0BBF \u0BA4\u0BB0\u0BB5\u0BC1 \u0B87\u0BB2\u0BCD\u0BB2\u0BC8.`,
    sk: "\u017Diadne \xFAdaje o jazykoch.",
    tr: "Dil verisi yok.",
    pl: "Brak danych dotycz\u0105cych j\u0119zyk\xF3w.",
    uz: "Til haqida ma'lumot yo'q.",
    vi: "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u ng\xF4n ng\u1EEF.",
    se: "Inga spr\xE5kdata.",
    he: "\u05D0\u05D9\u05DF \u05E0\u05EA\u05D5\u05E0\u05D9 \u05E9\u05E4\u05D5\u05EA",
    fil: "Walang datos ng lenggwahe.",
    th: "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E20\u0E32\u0E29\u0E32",
    sr: "\u041D\u0435\u043C\u0430 \u043F\u043E\u0434\u0430\u0442\u0430\u043A\u0430 \u043E \u0458\u0435\u0437\u0438\u0446\u0438\u043C\u0430.",
    "sr-latn": "Nema podataka o jezicima.",
    no: "Ingen spr\xE5kdata."
  }
};
var wakatimeCardLocales = {
  "wakatimecard.title": {
    en: "WakaTime Stats",
    ar: "\u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A \u0648\u0627\u0643\u0627 \u062A\u0627\u064A\u0645",
    az: "WakaTime Statistikas\u0131",
    ca: "Estad\xEDstiques de WakaTime",
    cn: "WakaTime \u5468\u7EDF\u8BA1",
    "zh-tw": "WakaTime \u5468\u7D71\u8A08",
    cs: "Statistiky WakaTime",
    de: "WakaTime Status",
    sw: "Takwimu ya WakaTime",
    ur: "\u0648\u06A9\u0627\u0679\u0627\u0626\u0645 \u06A9\u06D2 \u0627\u0639\u062F\u0627\u062F \u0648 \u0634\u0645\u0627\u0631",
    bg: "WakaTime \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430",
    bn: "WakaTime \u09B8\u09CD\u099F\u09CD\u09AF\u09BE\u099F\u09BE\u09B8",
    es: "Estad\xEDsticas de WakaTime",
    fa: "\u0622\u0645\u0627\u0631 WakaTime",
    fi: "WakaTime-tilastot",
    fr: "Statistiques de WakaTime",
    hi: "\u0935\u093E\u0915\u093E\u091F\u093E\u0907\u092E \u0906\u0901\u0915\u0921\u093C\u0947",
    sa: "WakaTime \u0938\u093E\u0902\u0916\u094D\u092F\u093F\u0915\u0940",
    hu: "WakaTime statisztika",
    it: "Statistiche WakaTime",
    ja: "WakaTime \u30EF\u30AB\u30BF\u30A4\u30E0\u7D71\u8A08",
    kr: "WakaTime \uC8FC\uAC04 \uD1B5\uACC4",
    nl: "WakaTime-statistieken",
    "pt-pt": "Estat\xEDsticas WakaTime",
    "pt-br": "Estat\xEDsticas WakaTime",
    np: "WakaTime \u0924\u0925\u094D\u092F\u093E .\u094D\u0915",
    el: "\u03A3\u03C4\u03B1\u03C4\u03B9\u03C3\u03C4\u03B9\u03BA\u03AC WakaTime",
    ro: "Statistici WakaTime",
    ru: "\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 WakaTime",
    "uk-ua": "\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 WakaTime",
    id: "Status WakaTime",
    ml: "\u0D35\u0D3E\u0D15\u0D1F\u0D48\u0D02 \u0D38\u0D4D\u0D25\u0D3F\u0D24\u0D3F\u0D35\u0D3F\u0D35\u0D30\u0D15\u0D4D\u0D15\u0D23\u0D15\u0D4D\u0D15\u0D41\u0D15\u0D7E",
    my: "WakaTime \u1021\u1001\u103B\u1000\u103A\u1021\u101C\u1000\u103A\u1019\u103B\u102C\u1038",
    ta: `WakaTime \u0BAA\u0BC1\u0BB3\u0BCD\u0BB3\u0BBF\u0BB5\u0BBF\u0BB5\u0BB0\u0B99\u0BCD\u0B95\u0BB3\u0BCD`,
    sk: "WakaTime \u0161tatistika",
    tr: "WakaTime \u0130statistikler",
    pl: "Statystyki WakaTime",
    uz: "WakaTime statistikasi",
    vi: "Th\u1ED1ng K\xEA WakaTime",
    se: "WakaTime statistik",
    he: "\u05E1\u05D8\u05D8\u05D9\u05E1\u05D8\u05D9\u05E7\u05D5\u05EA WakaTime",
    fil: "Mga Estadistika ng WakaTime",
    th: "\u0E2A\u0E16\u0E34\u0E15\u0E34 WakaTime",
    sr: "WakaTime \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430",
    "sr-latn": "WakaTime statistika",
    no: "WakaTime-statistikk"
  },
  "wakatimecard.lastyear": {
    en: "last year",
    ar: "\u0627\u0644\u0639\u0627\u0645 \u0627\u0644\u0645\u0627\u0636\u064A",
    az: "\xD6t\u0259n il",
    ca: "L'any passat",
    cn: "\u53BB\u5E74",
    "zh-tw": "\u53BB\u5E74",
    cs: "Minul\xFD rok",
    de: "Letztes Jahr",
    sw: "Mwaka uliopita",
    ur: "\u067E\u0686\u06BE\u0644\u0627 \u0633\u0627\u0644",
    bg: "\u043C\u0438\u043D\u0430\u043B\u0430\u0442\u0430 \u0433\u043E\u0434.",
    bn: "\u0997\u09A4 \u09AC\u099B\u09B0",
    es: "El a\xF1o pasado",
    fa: "\u0633\u0627\u0644 \u06AF\u0630\u0634\u062A\u0647",
    fi: "Viime vuosi",
    fr: "L'ann\xE9e derni\xE8re",
    hi: "\u092A\u093F\u091B\u0932\u0947 \u0938\u093E\u0932",
    sa: "\u0917\u0924\u0935\u0930\u094D\u0937\u0947",
    hu: "Tavaly",
    it: "L'anno scorso",
    ja: "\u6628\u5E74",
    kr: "\uC791\uB144",
    nl: "Vorig jaar",
    "pt-pt": "Ano passado",
    "pt-br": "Ano passado",
    np: "\u0917\u0924 \u0935\u0930\u094D\u0937",
    el: "\u03A0\u03AD\u03C1\u03C5\u03C3\u03B9",
    ro: "Anul trecut",
    ru: "\u0417\u0430 \u043F\u0440\u043E\u0448\u043B\u044B\u0439 \u0433\u043E\u0434",
    "uk-ua": "\u0417\u0430 \u043C\u0438\u043D\u0443\u043B\u0438\u0439 \u0440\u0456\u043A",
    id: "Tahun lalu",
    ml: "\u0D15\u0D34\u0D3F\u0D1E\u0D4D\u0D1E \u0D35\u0D7C\u0D37\u0D02",
    my: "\u1019\u1014\u103E\u1005\u103A\u1000",
    ta: `\u0B95\u0B9F\u0BA8\u0BCD\u0BA4 \u0B86\u0BA3\u0BCD\u0B9F\u0BC1`,
    sk: "Minul\xFD rok",
    tr: "Ge\xE7en y\u0131l",
    pl: "W zesz\u0142ym roku",
    uz: "O'tgan yil",
    vi: "N\u0103m ngo\xE1i",
    se: "F\xF6rra \xE5ret",
    he: "\u05E9\u05E0\u05D4 \u05E9\u05E2\u05D1\u05E8\u05D4",
    fil: "Nakaraang Taon",
    th: "\u0E1B\u0E35\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27",
    sr: "\u041F\u0440\u043E\u0448\u043B\u0430 \u0433\u043E\u0434.",
    "sr-latn": "Pro\u0161la god.",
    no: "I fjor"
  },
  "wakatimecard.last7days": {
    en: "last 7 days",
    ar: "\u0622\u062E\u0631 7 \u0623\u064A\u0627\u0645",
    az: "Son 7 g\xFCn",
    ca: "Ultims 7 dies",
    cn: "\u6700\u8FD1 7 \u5929",
    "zh-tw": "\u6700\u8FD1 7 \u5929",
    cs: "Posledn\xEDch 7 dn\xED",
    de: "Letzte 7 Tage",
    sw: "Siku 7 zilizopita",
    ur: "\u067E\u0686\u06BE\u0644\u06D2 7 \u062F\u0646",
    bg: "\u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0442\u0435 7 \u0434\u043D\u0438",
    bn: "\u0997\u09A4 \u09ED \u09A6\u09BF\u09A8",
    es: "\xDAltimos 7 d\xEDas",
    fa: "\u0647\u0641\u062A \u0631\u0648\u0632 \u06AF\u0630\u0634\u062A\u0647",
    fi: "Viimeiset 7 p\xE4iv\xE4\xE4",
    fr: "7 derniers jours",
    hi: "\u092A\u093F\u091B\u0932\u0947 7 \u0926\u093F\u0928",
    sa: "\u0935\u093F\u0917\u0924\u0938\u092A\u094D\u0924\u0926\u093F\u0928\u0947\u0937\u0941",
    hu: "Elm\xFAlt 7 nap",
    it: "Ultimi 7 giorni",
    ja: "\u904E\u53BB 7 \u65E5\u9593",
    kr: "\uC9C0\uB09C 7 \uC77C",
    nl: "Afgelopen 7 dagen",
    "pt-pt": "\xDAltimos 7 dias",
    "pt-br": "\xDAltimos 7 dias",
    np: "\u0917\u0924 \u096D \u0926\u093F\u0928",
    el: "\u03A4\u03B5\u03BB\u03B5\u03C5\u03C4\u03B1\u03AF\u03B5\u03C2 7 \u03B7\u03BC\u03AD\u03C1\u03B5\u03C2",
    ro: "Ultimele 7 zile",
    ru: "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 7 \u0434\u043D\u0435\u0439",
    "uk-ua": "\u041E\u0441\u0442\u0430\u043D\u043D\u0456 7 \u0434\u043D\u0456\u0432",
    id: "7 hari terakhir",
    ml: "\u0D15\u0D34\u0D3F\u0D1E\u0D4D\u0D1E 7 \u0D26\u0D3F\u0D35\u0D38\u0D02",
    my: "7 \u101B\u1000\u103A\u1021\u1010\u103D\u1004\u103A\u1038",
    ta: `\u0B95\u0B9F\u0BA8\u0BCD\u0BA4 7 \u0BA8\u0BBE\u0B9F\u0BCD\u0B95\u0BB3\u0BCD`,
    sk: "Posledn\xFDch 7 dn\xED",
    tr: "Son 7 g\xFCn",
    pl: "Ostatnie 7 dni",
    uz: "O'tgan 7 kun",
    vi: "7 ng\xE0y qua",
    se: "Senaste 7 dagarna",
    he: "\u05D1\u05BE7 \u05D4\u05D9\u05DE\u05D9\u05DD \u05D4\u05D0\u05D7\u05E8\u05D5\u05E0\u05D9\u05DD",
    fil: "Huling 7 Araw",
    th: "7 \u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E1C\u0E48\u0E32\u0E19\u0E21\u0E32",
    sr: "\u041F\u0440\u0435\u0442\u0445\u043E\u0434\u043D\u0438\u0445 7 \u0434\u0430\u043D\u0430",
    "sr-latn": "Prethodnih 7 dana",
    no: "Siste 7 dager"
  },
  "wakatimecard.notpublic": {
    en: "WakaTime user profile not public",
    ar: "\u0645\u0644\u0641 \u0645\u0633\u062A\u062E\u062F\u0645 \u0648\u0627\u0643\u0627 \u062A\u0627\u064A\u0645 \u0634\u062E\u0635\u064A",
    az: "WakaTime istifad\u0259\xE7i profili ictimai deyil",
    ca: "Perfil d'usuari de WakaTime no p\xFAblic",
    cn: "WakaTime \u7528\u6237\u4E2A\u4EBA\u8D44\u6599\u672A\u516C\u5F00",
    "zh-tw": "WakaTime \u4F7F\u7528\u8005\u500B\u4EBA\u8CC7\u6599\u672A\u516C\u958B",
    cs: "Profil u\u017Eivatele WakaTime nen\xED ve\u0159ejn\xFD",
    de: "WakaTime-Benutzerprofil nicht \xF6ffentlich",
    sw: "Maelezo ya mtumizi wa WakaTime si ya watu wote(umma)",
    ur: "\u0648\u06A9\u0627\u0679\u0627\u0626\u0645 \u0635\u0627\u0631\u0641 \u06A9\u0627 \u067E\u0631\u0648\u0641\u0627\u0626\u0644 \u0639\u0648\u0627\u0645\u06CC \u0646\u06C1\u06CC\u06BA",
    bg: "\u041F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u0441\u043A\u0438 \u043F\u0440\u043E\u0444\u0438\u043B \u0432 WakaTime \u043D\u0435 \u0435 \u043E\u0431\u0449\u043E\u0434\u043E\u0441\u0442\u044A\u043F\u0435\u043D",
    bn: "WakaTime \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0\u0995\u09BE\u09B0\u09C0\u09B0 \u09AA\u09CD\u09B0\u09CB\u09AB\u09BE\u0987\u09B2 \u09AA\u09CD\u09B0\u0995\u09BE\u09B6\u09CD\u09AF \u09A8\u09DF",
    es: "Perfil de usuario de WakaTime no p\xFAblico",
    fa: "\u067E\u0631\u0648\u0641\u0627\u06CC\u0644 \u06A9\u0627\u0631\u0628\u0631\u06CC WakaTime \u0639\u0645\u0648\u0645\u06CC \u0646\u06CC\u0633\u062A",
    fi: "WakaTime-k\xE4ytt\xE4j\xE4profiili ei ole julkinen",
    fr: "Profil utilisateur WakaTime non public",
    hi: "WakaTime \u0909\u092A\u092F\u094B\u0917\u0915\u0930\u094D\u0924\u093E \u092A\u094D\u0930\u094B\u092B\u093C\u093E\u0907\u0932 \u0938\u093E\u0930\u094D\u0935\u091C\u0928\u093F\u0915 \u0928\u0939\u0940\u0902 \u0939\u0948",
    sa: "WakaTime \u0909\u092A\u092F\u094B\u0917\u0915\u0930\u094D\u0924\u093E-\u092A\u094D\u0930\u094B\u092B\u093C\u093E\u0907\u0932 \u0938\u093E\u0930\u094D\u0935\u091C\u0928\u093F\u0915\u0902 \u0928\u093E\u0938\u094D\u0924\u093F",
    hu: "A WakaTime felhaszn\xE1l\xF3i profilja nem nyilv\xE1nos",
    it: "Profilo utente WakaTime non pubblico",
    ja: "WakaTime \u30E6\u30FC\u30B6\u30FC\u30D7\u30ED\u30D5\u30A1\u30A4\u30EB\u306F\u516C\u958B\u3055\u308C\u3066\u3044\u307E\u305B\u3093",
    kr: "WakaTime \uC0AC\uC6A9\uC790 \uD504\uB85C\uD544\uC774 \uACF5\uAC1C\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4",
    nl: "WakaTime gebruikersprofiel niet openbaar",
    "pt-pt": "Perfil de utilizador WakaTime n\xE3o p\xFAblico",
    "pt-br": "Perfil de usu\xE1rio WakaTime n\xE3o p\xFAblico",
    np: "WakaTime \u092A\u094D\u0930\u092F\u094B\u0917\u0915\u0930\u094D\u0924\u093E \u092A\u094D\u0930\u094B\u092B\u093E\u0907\u0932 \u0938\u093E\u0930\u094D\u0935\u091C\u0928\u093F\u0915 \u091B\u0948\u0928",
    el: "\u03A4\u03BF \u03C0\u03C1\u03BF\u03C6\u03AF\u03BB \u03C7\u03C1\u03AE\u03C3\u03C4\u03B7 WakaTime \u03B4\u03B5\u03BD \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B4\u03B7\u03BC\u03CC\u03C3\u03B9\u03BF",
    ro: "Profilul utilizatorului de Wakatime nu este public",
    ru: "\u041F\u0440\u043E\u0444\u0438\u043B\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F WakaTime \u043D\u0435 \u043E\u0431\u0449\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0439",
    "uk-ua": "\u041F\u0440\u043E\u0444\u0456\u043B\u044C \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 WakaTime \u043D\u0435 \u043F\u0443\u0431\u043B\u0456\u0447\u043D\u0438\u0439",
    id: "Profil pengguna WakaTime tidak publik",
    ml: "WakaTime \u0D09\u0D2A\u0D2F\u0D4B\u0D15\u0D4D\u0D24\u0D43 \u0D2A\u0D4D\u0D30\u0D4A\u0D2B\u0D48\u0D7D \u0D2A\u0D4A\u0D24\u0D41\u0D35\u0D3E\u0D2F\u0D3F \u0D2A\u0D4D\u0D30\u0D38\u0D3F\u0D26\u0D4D\u0D27\u0D40\u0D15\u0D30\u0D3F\u0D15\u0D4D\u0D15\u0D2A\u0D4D\u0D2A\u0D46\u0D1F\u0D3E\u0D24\u0D4D\u0D24\u0D24\u0D3E\u0D23\u0D4D",
    my: "Public Profile \u1019\u101F\u102F\u1010\u103A\u1015\u102B\u104B",
    ta: `WakaTime \u0BAA\u0BAF\u0BA9\u0BB0\u0BCD \u0B9A\u0BC1\u0BAF\u0BB5\u0BBF\u0BB5\u0BB0\u0BAE\u0BCD \u0BAA\u0BCA\u0BA4\u0BC1\u0BB5\u0BBF\u0BB2\u0BCD \u0B87\u0BB2\u0BCD\u0BB2\u0BC8.`,
    sk: "Profil pou\u017E\xEDvate\u013Ea WakaTime nie je verejn\xFD",
    tr: "WakaTime kullan\u0131c\u0131 profili herkese a\xE7\u0131k de\u011Fil",
    pl: "Profil u\u017Cytkownika WakaTime nie jest publiczny",
    uz: "WakaTime foydalanuvchi profili ochiq emas",
    vi: "H\u1ED3 s\u01A1 ng\u01B0\u1EDDi d\xF9ng WakaTime kh\xF4ng c\xF4ng khai",
    se: "WakaTime anv\xE4ndarprofil inte offentlig",
    he: "\u05E4\u05E8\u05D5\u05E4\u05D9\u05DC \u05DE\u05E9\u05EA\u05DE\u05E9 WakaTime \u05DC\u05D0 \u05E4\u05D5\u05DE\u05D1\u05D9",
    fil: "Hindi pampubliko ang profile ng gumagamit ng WakaTime",
    th: "\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49 WakaTime \u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E32\u0E18\u0E32\u0E23\u0E13\u0E30",
    sr: "WakaTime \u043F\u0440\u043E\u0444\u0438\u043B \u043A\u043E\u0440\u0438\u0441\u043D\u0438\u043A\u0430 \u043D\u0438\u0458\u0435 \u0458\u0430\u0432\u0430\u043D",
    "sr-latn": "WakaTime profil korisnika nije javan",
    no: "WakaTime brukerprofil ikke offentlig"
  },
  "wakatimecard.nocodedetails": {
    en: "User doesn't publicly share detailed code statistics",
    ar: "\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0644\u0627 \u064A\u0634\u0627\u0631\u0643 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u062A\u0641\u0635\u064A\u0644\u064A\u0629",
    az: "\u0130stifad\u0259\xE7i kod statistikalar\u0131n\u0131 ictimai \u015F\u0259kild\u0259 payla\u015Fm\u0131r",
    ca: "L'usuari no comparteix dades p\xFAbliques del seu codi",
    cn: "\u7528\u6237\u4E0D\u516C\u5F00\u5206\u4EAB\u8BE6\u7EC6\u7684\u4EE3\u7801\u7EDF\u8BA1\u4FE1\u606F",
    "zh-tw": "\u4F7F\u7528\u8005\u4E0D\u516C\u958B\u5206\u4EAB\u8A73\u7D30\u7684\u7A0B\u5F0F\u78BC\u7D71\u8A08\u8CC7\u8A0A",
    cs: "U\u017Eivatel nesd\xEDl\xED podrobn\xE9 statistiky k\xF3du",
    de: "Benutzer teilt keine detaillierten Code-Statistiken",
    sw: "Mtumizi hagawi kila kitu au takwimu na umma",
    ur: "\u0635\u0627\u0631\u0641 \u0639\u0648\u0627\u0645\u06CC \u0637\u0648\u0631 \u067E\u0631 \u062A\u0641\u0635\u06CC\u0644\u06CC \u06A9\u0648\u0688 \u06A9\u06D2 \u0627\u0639\u062F\u0627\u062F \u0648 \u0634\u0645\u0627\u0631 \u0634\u06CC\u0626\u0631 \u0646\u06C1\u06CC\u06BA \u06A9\u0631\u062A\u0627",
    bg: "\u041F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u044F\u0442 \u043D\u0435 \u0441\u043F\u043E\u0434\u0435\u043B\u044F \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0430 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u0437\u0430 \u043A\u043E\u0434",
    bn: "\u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0\u0995\u09BE\u09B0\u09C0 \u09AC\u09BF\u09B8\u09CD\u09A4\u09BE\u09B0\u09BF\u09A4 \u0995\u09CB\u09A1 \u09AA\u09B0\u09BF\u09B8\u0982\u0996\u09CD\u09AF\u09BE\u09A8 \u09AA\u09CD\u09B0\u0995\u09BE\u09B6 \u0995\u09B0\u09C7\u09A8 \u09A8\u09BE",
    es: "El usuario no comparte p\xFAblicamente estad\xEDsticas detalladas de c\xF3digo",
    fa: "\u06A9\u0627\u0631\u0628\u0631 \u0622\u0645\u0627\u0631 \u06A9\u062F \u062A\u0641\u0635\u06CC\u0644\u06CC \u0631\u0627 \u0628\u0647\u200C\u0635\u0648\u0631\u062A \u0639\u0645\u0648\u0645\u06CC \u0628\u0647 \u0627\u0634\u062A\u0631\u0627\u06A9 \u0646\u0645\u06CC\u200C\u06AF\u0630\u0627\u0631\u062F",
    fi: "K\xE4ytt\xE4j\xE4 ei jaa julkisesti tarkkoja kooditilastoja",
    fr: "L'utilisateur ne partage pas publiquement de statistiques de code d\xE9taill\xE9es",
    hi: "\u0909\u092A\u092F\u094B\u0917\u0915\u0930\u094D\u0924\u093E \u0935\u093F\u0938\u094D\u0924\u0943\u0924 \u0915\u094B\u0921 \u0906\u0901\u0915\u0921\u093C\u0947 \u0938\u093E\u0930\u094D\u0935\u091C\u0928\u093F\u0915 \u0930\u0942\u092A \u0938\u0947 \u0938\u093E\u091D\u093E \u0928\u0939\u0940\u0902 \u0915\u0930\u0924\u093E \u0939\u0948",
    sa: "\u0909\u092A\u092F\u094B\u0917\u0915\u0930\u094D\u0924\u093E \u0935\u093F\u0938\u094D\u0924\u0943\u0924-\u0915\u094B\u0921-\u0938\u093E\u0902\u0916\u094D\u092F\u093F\u0915\u0940\u0902 \u0938\u093E\u0930\u094D\u0935\u091C\u0928\u093F\u0915\u0930\u0942\u092A\u0947\u0923 \u0928 \u0926\u0930\u094D\u0936\u092F\u0924\u093F",
    hu: "A felhaszn\xE1l\xF3 nem osztja meg nyilv\xE1nosan a r\xE9szletes k\xF3dstatisztik\xE1kat",
    it: "L'utente non condivide pubblicamente statistiche dettagliate sul codice",
    ja: "\u30E6\u30FC\u30B6\u30FC\u306F\u8A73\u7D30\u306A\u30B3\u30FC\u30C9\u7D71\u8A08\u3092\u516C\u958B\u3057\u307E\u305B\u3093",
    kr: "\uC0AC\uC6A9\uC790\uB294 \uC790\uC138\uD55C \uCF54\uB4DC \uD1B5\uACC4\uB97C \uACF5\uAC1C\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4",
    nl: "Gebruiker deelt geen gedetailleerde code-statistieken",
    "pt-pt": "O utilizador n\xE3o partilha publicamente estat\xEDsticas detalhadas de c\xF3digo",
    "pt-br": "O usu\xE1rio n\xE3o compartilha publicamente estat\xEDsticas detalhadas de c\xF3digo",
    np: "\u092A\u094D\u0930\u092F\u094B\u0917\u0915\u0930\u094D\u0924\u093E \u0938\u093E\u0930\u094D\u0935\u091C\u0928\u093F\u0915 \u0930\u0942\u092A\u092E\u093E \u0935\u093F\u0938\u094D\u0924\u0943\u0924 \u0915\u094B\u0921 \u0924\u0925\u094D\u092F\u093E\u0919\u094D\u0915 \u0938\u093E\u091D\u093E \u0917\u0930\u094D\u0926\u0948\u0928",
    el: "\u039F \u03C7\u03C1\u03AE\u03C3\u03C4\u03B7\u03C2 \u03B4\u03B5\u03BD \u03B4\u03B7\u03BC\u03BF\u03C3\u03B9\u03B5\u03CD\u03B5\u03B9 \u03B4\u03B7\u03BC\u03CC\u03C3\u03B9\u03B1 \u03BB\u03B5\u03C0\u03C4\u03BF\u03BC\u03B5\u03C1\u03B5\u03AF\u03C2 \u03C3\u03C4\u03B1\u03C4\u03B9\u03C3\u03C4\u03B9\u03BA\u03AD\u03C2 \u03BA\u03CE\u03B4\u03B9\u03BA\u03B1",
    ro: "Utilizatorul nu \xEE\u0219i public\u0103 statisticile detaliate ale codului",
    ru: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043D\u0435 \u0434\u0435\u043B\u0438\u0442\u0441\u044F \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0439 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u0434\u0430",
    "uk-ua": "\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447 \u043D\u0435 \u043F\u0443\u0431\u043B\u0456\u043A\u0443\u0454 \u0434\u0435\u0442\u0430\u043B\u044C\u043D\u0443 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0443 \u043A\u043E\u0434\u0443",
    id: "Pengguna tidak membagikan statistik kode terperinci secara publik",
    ml: "\u0D09\u0D2A\u0D2F\u0D4B\u0D15\u0D4D\u0D24\u0D3E\u0D35\u0D4D \u0D2A\u0D4A\u0D24\u0D41\u0D35\u0D3E\u0D2F\u0D3F \u0D35\u0D3F\u0D36\u0D26\u0D40\u0D15\u0D30\u0D3F\u0D1A\u0D4D\u0D1A \u0D15\u0D4B\u0D21\u0D4D \u0D38\u0D4D\u0D31\u0D4D\u0D31\u0D3E\u0D31\u0D4D\u0D31\u0D3F\u0D38\u0D4D\u0D31\u0D4D\u0D31\u0D3F\u0D15\u0D4D\u0D38\u0D4D \u0D2A\u0D19\u0D4D\u0D15\u0D3F\u0D1F\u0D41\u0D28\u0D4D\u0D28\u0D3F\u0D32\u0D4D\u0D32",
    my: "\u1021\u101E\u102F\u1036\u1038\u1015\u103C\u102F\u101E\u1030\u101E\u100A\u103A \u1021\u101E\u1031\u1038\u1005\u102D\u1010\u103A \u1000\u102F\u1012\u103A \u1005\u102C\u101B\u1004\u103A\u1038\u1021\u1004\u103A\u1038\u1019\u103B\u102C\u1038\u1000\u102D\u102F \u1021\u1019\u103B\u102C\u1038\u101E\u102D\u102F\u1037 \u1019\u1019\u103B\u103E\u101D\u1031\u1015\u102B\u104B",
    ta: `\u0BAA\u0BAF\u0BA9\u0BB0\u0BCD \u0BB5\u0BBF\u0BB0\u0BBF\u0BB5\u0BBE\u0BA9 \u0B95\u0BC1\u0BB1\u0BBF\u0BAF\u0BC0\u0B9F\u0BCD\u0B9F\u0BC1 \u0BAA\u0BC1\u0BB3\u0BCD\u0BB3\u0BBF\u0BB5\u0BBF\u0BB5\u0BB0\u0B99\u0BCD\u0B95\u0BB3\u0BC8\u0BAA\u0BCD \u0BAA\u0BCA\u0BA4\u0BC1\u0BB5\u0BBF\u0BB2\u0BCD \u0BAA\u0B95\u0BBF\u0BB0\u0BCD\u0BB5\u0BA4\u0BBF\u0BB2\u0BCD\u0BB2\u0BC8.`,
    sk: "Pou\u017E\xEDvate\u013E neposkytuje verejne podrobn\xE9 \u0161tatistiky k\xF3du",
    tr: "Kullan\u0131c\u0131 ayr\u0131nt\u0131l\u0131 kod istatistiklerini herkese a\xE7\u0131k olarak payla\u015Fm\u0131yor",
    pl: "U\u017Cytkownik nie udost\u0119pnia publicznie szczeg\xF3\u0142owych statystyk kodu",
    uz: "Foydalanuvchi umumiy ko`d statistikasini ochiq ravishda almashmaydi",
    vi: "Ng\u01B0\u1EDDi d\xF9ng kh\xF4ng chia s\u1EBB th\u1ED1ng k\xEA m\xE3 chi ti\u1EBFt c\xF4ng khai",
    se: "Anv\xE4ndaren delar inte offentligt detaljerad kodstatistik",
    he: "\u05DE\u05E9\u05EA\u05DE\u05E9 \u05DC\u05D0 \u05DE\u05E4\u05E8\u05E1\u05DD \u05E4\u05D5\u05DE\u05D1\u05D9\u05EA \u05E1\u05D8\u05D8\u05D9\u05E1\u05D8\u05D9\u05E7\u05D5\u05EA \u05E7\u05D5\u05D3 \u05DE\u05E4\u05D5\u05E8\u05D8\u05D5\u05EA",
    fil: "Hindi ibinabahagi ng gumagamit ang detalyadong estadistika ng code nang pampubliko",
    th: "\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E41\u0E0A\u0E23\u0E4C\u0E2A\u0E16\u0E34\u0E15\u0E34\u0E42\u0E04\u0E49\u0E14\u0E41\u0E1A\u0E1A\u0E2A\u0E32\u0E18\u0E32\u0E23\u0E13\u0E30",
    sr: "\u041A\u043E\u0440\u0438\u0441\u043D\u0438\u043A \u043D\u0435 \u0434\u0435\u043B\u0438 \u0458\u0430\u0432\u043D\u043E \u0434\u0435\u0442\u0430\u0459\u043D\u0443 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0443 \u043A\u043E\u0434\u0430",
    "sr-latn": "Korisnik ne deli javno detaljnu statistiku koda",
    no: "Brukeren deler ikke detaljert kodestatistikk offentlig"
  },
  "wakatimecard.nocodingactivity": {
    en: "No coding activity this week",
    ar: "\u0644\u0627 \u064A\u0648\u062C\u062F \u0646\u0634\u0627\u0637 \u0628\u0631\u0645\u062C\u064A \u0644\u0647\u0630\u0627 \u0627\u0644\u0623\u0633\u0628\u0648\u0639",
    az: "Bu h\u0259ft\u0259 he\xE7 bir kodla\u015Fd\u0131rma f\u0259aliyy\u0259ti olmay\u0131b",
    ca: "No hi ha activitat de codificaci\xF3 aquesta setmana",
    cn: "\u672C\u5468\u6CA1\u6709\u7F16\u7A0B\u6D3B\u52A8",
    "zh-tw": "\u672C\u5468\u6C92\u6709\u7DE8\u7A0B\u6D3B\u52D5",
    cs: "Tento t\xFDden \u017E\xE1dn\xE1 aktivita v k\xF3dov\xE1n\xED",
    de: "Keine Aktivit\xE4ten in dieser Woche",
    sw: "Hakuna matukio yoyote ya kusimba wiki hii",
    ur: "\u0627\u0633 \u06C1\u0641\u062A\u06D2 \u06A9\u0648\u0626\u06CC \u06A9\u0648\u0688\u0646\u06AF \u0633\u0631\u06AF\u0631\u0645\u06CC \u0646\u06C1\u06CC\u06BA",
    bg: "\u041D\u044F\u043C\u0430 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442 \u043F\u0440\u0438 \u043A\u043E\u0434\u0438\u0440\u0430\u043D\u0435\u0442\u043E \u0442\u0430\u0437\u0438 \u0441\u0435\u0434\u043C\u0438\u0446\u0430",
    bn: "\u098F\u0987 \u09B8\u09AA\u09CD\u09A4\u09BE\u09B9\u09C7 \u0995\u09CB\u09A8 \u0995\u09CB\u09A1\u09BF\u0982 \u0985\u09CD\u09AF\u09BE\u0995\u09CD\u099F\u09BF\u09AD\u09BF\u099F\u09BF \u09A8\u09C7\u0987",
    es: "No hay actividad de codificaci\xF3n esta semana",
    fa: "\u0641\u0639\u0627\u0644\u06CC\u062A \u06A9\u062F\u0646\u0648\u06CC\u0633\u06CC \u062F\u0631 \u0627\u06CC\u0646 \u0647\u0641\u062A\u0647 \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F",
    fi: "Ei koodaustoimintaa t\xE4ll\xE4 viikolla",
    fr: "Aucune activit\xE9 de codage cette semaine",
    hi: "\u0907\u0938 \u0938\u092A\u094D\u0924\u093E\u0939 \u0915\u094B\u0908 \u0915\u094B\u0921\u093F\u0902\u0917 \u0917\u0924\u093F\u0935\u093F\u0927\u093F \u0928\u0939\u0940\u0902 ",
    sa: "\u0905\u0938\u094D\u092E\u093F\u0928\u094D \u0938\u092A\u094D\u0924\u093E\u0939\u0947 \u0915\u094B\u0921\u093F\u0919\u094D-\u0915\u093E\u0930\u094D\u092F\u0902 \u0928\u093E\u0938\u094D\u0924\u093F",
    hu: "Nem volt aktivit\xE1s ezen a h\xE9ten",
    it: "Nessuna attivit\xE0 in questa settimana",
    ja: "\u4ECA\u9031\u306E\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u6D3B\u52D5\u306F\u3042\u308A\u307E\u305B\u3093",
    kr: "\uC774\uBC88 \uC8FC \uC791\uC5C5\uB0B4\uC5ED \uC5C6\uC74C",
    nl: "Geen programmeeractiviteit deze week",
    "pt-pt": "Sem atividade esta semana",
    "pt-br": "Nenhuma atividade de codifica\xE7\xE3o esta semana",
    np: "\u092F\u0938 \u0939\u092A\u094D\u0924\u093E \u0915\u0941\u0928\u0948 \u0915\u094B\u0921\u093F\u0902\u0917 \u0917\u0924\u093F\u0935\u093F\u0927\u093F \u091B\u0948\u0928",
    el: "\u0394\u03B5\u03BD \u03C5\u03C0\u03AC\u03C1\u03C7\u03B5\u03B9 \u03B4\u03C1\u03B1\u03C3\u03C4\u03B7\u03C1\u03B9\u03CC\u03C4\u03B7\u03C4\u03B1 \u03BA\u03CE\u03B4\u03B9\u03BA\u03B1 \u03B3\u03B9' \u03B1\u03C5\u03C4\u03AE \u03C4\u03B7\u03BD \u03B5\u03B2\u03B4\u03BF\u03BC\u03AC\u03B4\u03B1",
    ro: "Nicio activitate de programare s\u0103pt\u0103m\xE2na aceasta",
    ru: "\u041D\u0430 \u044D\u0442\u043E\u0439 \u043D\u0435\u0434\u0435\u043B\u0435 \u043D\u0435 \u0431\u044B\u043B\u043E \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438",
    "uk-ua": "\u0426\u044C\u043E\u0433\u043E \u0442\u0438\u0436\u043D\u044F \u043D\u0435 \u0431\u0443\u043B\u043E \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0456",
    id: "Tidak ada aktivitas perkodingan minggu ini",
    ml: "\u0D08 \u0D06\u0D34\u0D4D\u0D1A \u0D15\u0D4B\u0D21\u0D3F\u0D02\u0D17\u0D4D \u0D2A\u0D4D\u0D30\u0D35\u0D7C\u0D24\u0D4D\u0D24\u0D28\u0D19\u0D4D\u0D19\u0D33\u0D4A\u0D28\u0D4D\u0D28\u0D41\u0D2E\u0D3F\u0D32\u0D4D\u0D32",
    my: "\u1012\u102E\u1021\u1015\u1010\u103A\u1019\u103E\u102C \u1000\u102F\u1012\u103A\u101B\u1031\u1038\u1001\u103C\u1004\u103A\u1038 \u1019\u101B\u103E\u102D\u1015\u102B\u104B",
    ta: `\u0B87\u0BA8\u0BCD\u0BA4 \u0BB5\u0BBE\u0BB0\u0BAE\u0BCD \u0B95\u0BC1\u0BB1\u0BBF\u0BAF\u0BC0\u0B9F\u0BCD\u0B9F\u0BC1 \u0B9A\u0BC6\u0BAF\u0BB2\u0BCD\u0BAA\u0BBE\u0B9F\u0BC1 \u0B87\u0BB2\u0BCD\u0BB2\u0BC8.`,
    sk: "\u017Diadna k\xF3dovacia aktivita tento t\xFD\u017Ede\u0148",
    tr: "Bu hafta herhangi bir kod yazma aktivitesi olmad\u0131",
    pl: "Brak aktywno\u015Bci w tym tygodniu",
    uz: "Bu hafta faol bo'lmadi",
    vi: "Kh\xF4ng C\xF3 Ho\u1EA1t \u0110\u1ED9ng Trong Tu\u1EA7n N\xE0y",
    se: "Ingen aktivitet denna vecka",
    he: "\u05D0\u05D9\u05DF \u05E4\u05E2\u05D9\u05DC\u05D5\u05EA \u05EA\u05DB\u05E0\u05D5\u05EA\u05D9\u05EA \u05D4\u05E9\u05D1\u05D5\u05E2",
    fil: "Walang aktibidad sa pag-code ngayong linggo",
    th: "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E01\u0E32\u0E23\u0E40\u0E02\u0E35\u0E22\u0E19\u0E42\u0E04\u0E49\u0E14\u0E43\u0E19\u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C\u0E19\u0E35\u0E49",
    sr: "\u0422\u043E\u043A\u043E\u043C \u043E\u0432\u0435 \u043D\u0435\u0434\u0435\u0459\u0435 \u043D\u0438\u0458\u0435 \u0431\u0438\u043B\u043E \u043D\u0438\u043A\u0430\u043A\u0432\u0438\u0445 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438",
    "sr-latn": "Tokom ove nedelje nije bilo nikakvih aktivnosti",
    no: "Ingen kodeaktivitet denne uken"
  }
};
var availableLocales = Object.keys(repoCardLocales["repocard.archived"]);
var isLocaleAvailable = /* @__PURE__ */ __name((locale) => {
  return availableLocales.includes(locale.toLowerCase());
}, "isLocaleAvailable");

// src/cards/stats.js
var CARD_MIN_WIDTH = 287;
var CARD_DEFAULT_WIDTH = 287;
var RANK_CARD_MIN_WIDTH = 420;
var RANK_CARD_DEFAULT_WIDTH = 450;
var RANK_ONLY_CARD_MIN_WIDTH = 290;
var RANK_ONLY_CARD_DEFAULT_WIDTH = 290;
var LONG_LOCALES = [
  "az",
  "bg",
  "cs",
  "de",
  "el",
  "es",
  "fil",
  "fi",
  "fr",
  "hu",
  "id",
  "ja",
  "ml",
  "my",
  "nl",
  "pl",
  "pt-br",
  "pt-pt",
  "ru",
  "sr",
  "sr-latn",
  "sw",
  "ta",
  "uk-ua",
  "uz",
  "zh-tw"
];
var createTextNode = /* @__PURE__ */ __name(({
  icon,
  label,
  value,
  id,
  unitSymbol,
  index,
  showIcons,
  shiftValuePos,
  bold,
  numberFormat,
  numberPrecision
}) => {
  const precision = typeof numberPrecision === "number" && !isNaN(numberPrecision) ? clampValue(numberPrecision, 0, 2) : void 0;
  const kValue = numberFormat.toLowerCase() === "long" || id === "prs_merged_percentage" ? value : kFormatter(value, precision);
  const staggerDelay = (index + 3) * 150;
  const labelOffset = showIcons ? `x="25"` : "";
  const iconSvg = showIcons ? `
    <svg data-testid="icon" class="icon" viewBox="0 0 16 16" version="1.1" width="16" height="16">
      ${icon}
    </svg>
  ` : "";
  return `
    <g class="stagger" style="animation-delay: ${staggerDelay}ms" transform="translate(25, 0)">
      ${iconSvg}
      <text class="stat ${bold ? " bold" : "not_bold"}" ${labelOffset} y="12.5">${label}:</text>
      <text
        class="stat ${bold ? " bold" : "not_bold"}"
        x="${(showIcons ? 140 : 120) + shiftValuePos}"
        y="12.5"
        data-testid="${id}"
      >${kValue}${unitSymbol ? ` ${unitSymbol}` : ""}</text>
    </g>
  `;
}, "createTextNode");
var calculateCircleProgress = /* @__PURE__ */ __name((value) => {
  const radius = 40;
  const c = Math.PI * (radius * 2);
  if (value < 0) {
    value = 0;
  }
  if (value > 100) {
    value = 100;
  }
  return (100 - value) / 100 * c;
}, "calculateCircleProgress");
var getProgressAnimation = /* @__PURE__ */ __name(({ progress }) => {
  return `
    @keyframes rankAnimation {
      from {
        stroke-dashoffset: ${calculateCircleProgress(0)};
      }
      to {
        stroke-dashoffset: ${calculateCircleProgress(progress)};
      }
    }
  `;
}, "getProgressAnimation");
var getStyles = /* @__PURE__ */ __name(({
  // eslint-disable-next-line no-unused-vars
  titleColor,
  textColor,
  iconColor,
  ringColor,
  show_icons,
  progress
}) => {
  return `
    .stat {
      font: 600 14px 'Segoe UI', Ubuntu, "Helvetica Neue", Sans-Serif; fill: ${textColor};
    }
    @supports(-moz-appearance: auto) {
      /* Selector detects Firefox */
      .stat { font-size:12px; }
    }
    .stagger {
      opacity: 0;
      animation: fadeInAnimation 0.3s ease-in-out forwards;
    }
    .rank-text {
      font: 800 24px 'Segoe UI', Ubuntu, Sans-Serif; fill: ${textColor};
      animation: scaleInAnimation 0.3s ease-in-out forwards;
    }
    .rank-percentile-header {
      font-size: 14px;
    }
    .rank-percentile-text {
      font-size: 16px;
    }
    
    .not_bold { font-weight: 400 }
    .bold { font-weight: 700 }
    .icon {
      fill: ${iconColor};
      display: ${show_icons ? "block" : "none"};
    }

    .rank-circle-rim {
      stroke: ${ringColor};
      fill: none;
      stroke-width: 6;
      opacity: 0.2;
    }
    .rank-circle {
      stroke: ${ringColor};
      stroke-dasharray: 250;
      fill: none;
      stroke-width: 6;
      stroke-linecap: round;
      opacity: 0.8;
      transform-origin: -10px 8px;
      transform: rotate(-90deg);
      animation: rankAnimation 1s forwards ease-in-out;
    }
    ${false ? "" : getProgressAnimation({ progress })}
  `;
}, "getStyles");
var getTotalCommitsYearLabel = /* @__PURE__ */ __name((include_all_commits, commits_year, i18n) => include_all_commits ? "" : commits_year ? ` (${commits_year})` : ` (${i18n.t("wakatimecard.lastyear")})`, "getTotalCommitsYearLabel");
var renderStatsCard = /* @__PURE__ */ __name((stats, options = {}) => {
  const {
    name,
    totalStars,
    totalCommits,
    totalIssues,
    totalPRs,
    totalPRsMerged,
    mergedPRsPercentage,
    totalReviews,
    totalDiscussionsStarted,
    totalDiscussionsAnswered,
    contributedTo,
    rank
  } = stats;
  const {
    hide = [],
    show_icons = false,
    hide_title = false,
    hide_border = false,
    card_width,
    hide_rank = false,
    include_all_commits = false,
    commits_year,
    line_height = 25,
    title_color,
    ring_color,
    icon_color,
    text_color,
    text_bold = true,
    bg_color,
    theme = "default",
    custom_title,
    border_radius,
    border_color,
    number_format = "short",
    number_precision,
    locale,
    disable_animations = false,
    rank_icon = "default",
    show = []
  } = options;
  const lheight = parseInt(String(line_height), 10);
  const { titleColor, iconColor, textColor, bgColor, borderColor, ringColor } = getCardColors({
    title_color,
    text_color,
    icon_color,
    bg_color,
    border_color,
    ring_color,
    theme
  });
  const apostrophe = /s$/i.test(name.trim()) ? "" : "s";
  const i18n = new I18n({
    locale,
    translations: {
      ...statCardLocales({ name, apostrophe }),
      ...wakatimeCardLocales
    }
  });
  const STATS = {};
  STATS.stars = {
    icon: icons.star,
    label: i18n.t("statcard.totalstars"),
    value: totalStars,
    id: "stars"
  };
  STATS.commits = {
    icon: icons.commits,
    label: `${i18n.t("statcard.commits")}${getTotalCommitsYearLabel(
      include_all_commits,
      commits_year,
      i18n
    )}`,
    value: totalCommits,
    id: "commits"
  };
  STATS.prs = {
    icon: icons.prs,
    label: i18n.t("statcard.prs"),
    value: totalPRs,
    id: "prs"
  };
  if (show.includes("prs_merged")) {
    STATS.prs_merged = {
      icon: icons.prs_merged,
      label: i18n.t("statcard.prs-merged"),
      value: totalPRsMerged,
      id: "prs_merged"
    };
  }
  if (show.includes("prs_merged_percentage")) {
    STATS.prs_merged_percentage = {
      icon: icons.prs_merged_percentage,
      label: i18n.t("statcard.prs-merged-percentage"),
      value: mergedPRsPercentage.toFixed(
        typeof number_precision === "number" && !isNaN(number_precision) ? clampValue(number_precision, 0, 2) : 2
      ),
      id: "prs_merged_percentage",
      unitSymbol: "%"
    };
  }
  if (show.includes("reviews")) {
    STATS.reviews = {
      icon: icons.reviews,
      label: i18n.t("statcard.reviews"),
      value: totalReviews,
      id: "reviews"
    };
  }
  STATS.issues = {
    icon: icons.issues,
    label: i18n.t("statcard.issues"),
    value: totalIssues,
    id: "issues"
  };
  if (show.includes("discussions_started")) {
    STATS.discussions_started = {
      icon: icons.discussions_started,
      label: i18n.t("statcard.discussions-started"),
      value: totalDiscussionsStarted,
      id: "discussions_started"
    };
  }
  if (show.includes("discussions_answered")) {
    STATS.discussions_answered = {
      icon: icons.discussions_answered,
      label: i18n.t("statcard.discussions-answered"),
      value: totalDiscussionsAnswered,
      id: "discussions_answered"
    };
  }
  STATS.contribs = {
    icon: icons.contribs,
    label: i18n.t("statcard.contribs"),
    value: contributedTo,
    id: "contribs"
  };
  const isLongLocale = locale ? LONG_LOCALES.includes(locale) : false;
  const statItems = Object.keys(STATS).filter((key) => !hide.includes(key)).map((key, index) => {
    const stats2 = STATS[key];
    return createTextNode({
      icon: stats2.icon,
      label: stats2.label,
      value: stats2.value,
      id: stats2.id,
      unitSymbol: stats2.unitSymbol,
      index,
      showIcons: show_icons,
      shiftValuePos: 79.01 + (isLongLocale ? 50 : 0),
      bold: text_bold,
      numberFormat: number_format,
      numberPrecision: number_precision
    });
  });
  if (statItems.length === 0 && hide_rank) {
    throw new CustomError(
      "Could not render stats card.",
      "Either stats or rank are required."
    );
  }
  let height = Math.max(
    45 + (statItems.length + 1) * lheight,
    hide_rank ? 0 : statItems.length ? 150 : 180
  );
  const progress = 100 - rank.percentile;
  const cssStyles = getStyles({
    titleColor,
    ringColor,
    textColor,
    iconColor,
    show_icons,
    progress
  });
  const calculateTextWidth = /* @__PURE__ */ __name(() => {
    return measureText(
      custom_title ? custom_title : statItems.length ? i18n.t("statcard.title") : i18n.t("statcard.ranktitle")
    );
  }, "calculateTextWidth");
  const iconWidth = show_icons && statItems.length ? 16 + /* padding */
  1 : 0;
  const minCardWidth = (hide_rank ? clampValue(
    50 + calculateTextWidth() * 2,
    CARD_MIN_WIDTH,
    Infinity
  ) : statItems.length ? RANK_CARD_MIN_WIDTH : RANK_ONLY_CARD_MIN_WIDTH) + iconWidth;
  const defaultCardWidth = (hide_rank ? CARD_DEFAULT_WIDTH : statItems.length ? RANK_CARD_DEFAULT_WIDTH : RANK_ONLY_CARD_DEFAULT_WIDTH) + iconWidth;
  let width = card_width ? isNaN(card_width) ? defaultCardWidth : card_width : defaultCardWidth;
  if (width < minCardWidth) {
    width = minCardWidth;
  }
  const card = new Card({
    customTitle: custom_title,
    defaultTitle: statItems.length ? i18n.t("statcard.title") : i18n.t("statcard.ranktitle"),
    width,
    height,
    border_radius,
    colors: {
      titleColor,
      textColor,
      iconColor,
      bgColor,
      borderColor
    }
  });
  card.setHideBorder(hide_border);
  card.setHideTitle(hide_title);
  card.setCSS(cssStyles);
  if (disable_animations) {
    card.disableAnimations();
  }
  const calculateRankXTranslation = /* @__PURE__ */ __name(() => {
    if (statItems.length) {
      const minXTranslation = RANK_CARD_MIN_WIDTH + iconWidth - 70;
      if (width > RANK_CARD_DEFAULT_WIDTH) {
        const xMaxExpansion = minXTranslation + (450 - minCardWidth) / 2;
        return xMaxExpansion + width - RANK_CARD_DEFAULT_WIDTH;
      } else {
        return minXTranslation + (width - minCardWidth) / 2;
      }
    } else {
      return width / 2 + 20 - 10;
    }
  }, "calculateRankXTranslation");
  const rankCircle = hide_rank ? "" : `<g data-testid="rank-circle"
          transform="translate(${calculateRankXTranslation()}, ${height / 2 - 50})">
        <circle class="rank-circle-rim" cx="-10" cy="8" r="40" />
        <circle class="rank-circle" cx="-10" cy="8" r="40" />
        <g class="rank-text">
          ${rankIcon(rank_icon, rank?.level, rank?.percentile)}
        </g>
      </g>`;
  const labels = Object.keys(STATS).filter((key) => !hide.includes(key)).map((key) => {
    const stats2 = STATS[key];
    if (key === "commits") {
      return `${i18n.t("statcard.commits")} ${getTotalCommitsYearLabel(
        include_all_commits,
        commits_year,
        i18n
      )} : ${stats2.value}`;
    }
    return `${stats2.label}: ${stats2.value}`;
  }).join(", ");
  card.setAccessibilityLabel({
    title: `${card.title}, Rank: ${rank.level}`,
    desc: labels
  });
  return card.render(`
    ${rankCircle}
    <svg x="0" y="0">
      ${flexLayout({
    items: statItems,
    gap: lheight,
    direction: "column"
  }).join("")}
    </svg>
  `);
}, "renderStatsCard");

// src/common/access.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// src/common/blacklist.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var blacklist = [
  "renovate-bot",
  "technote-space",
  "sw-yx",
  "YourUsername",
  "[YourUsername]"
];

// src/common/envs.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var whitelist = process.env.WHITELIST ? process.env.WHITELIST.split(",") : void 0;
var gistWhitelist = process.env.GIST_WHITELIST ? process.env.GIST_WHITELIST.split(",") : void 0;
var excludeRepositories = process.env.EXCLUDE_REPO ? process.env.EXCLUDE_REPO.split(",") : [];

// src/common/access.js
var NOT_WHITELISTED_USERNAME_MESSAGE = "This username is not whitelisted";
var NOT_WHITELISTED_GIST_MESSAGE = "This gist ID is not whitelisted";
var BLACKLISTED_MESSAGE = "This username is blacklisted";
var guardAccess = /* @__PURE__ */ __name(({ res, id, type: type2, colors }) => {
  if (!["username", "gist", "wakatime"].includes(type2)) {
    throw new Error(
      'Invalid type. Expected "username", "gist", or "wakatime".'
    );
  }
  const currentWhitelist = type2 === "gist" ? gistWhitelist : whitelist;
  const notWhitelistedMsg = type2 === "gist" ? NOT_WHITELISTED_GIST_MESSAGE : NOT_WHITELISTED_USERNAME_MESSAGE;
  if (Array.isArray(currentWhitelist) && !currentWhitelist.includes(id)) {
    const result = res.send(
      renderError({
        message: notWhitelistedMsg,
        secondaryMessage: "Please deploy your own instance",
        renderOptions: {
          ...colors,
          show_repo_link: false
        }
      })
    );
    return { isPassed: false, result };
  }
  if (type2 === "username" && currentWhitelist === void 0 && blacklist.includes(id)) {
    const result = res.send(
      renderError({
        message: BLACKLISTED_MESSAGE,
        secondaryMessage: "Please deploy your own instance",
        renderOptions: {
          ...colors,
          show_repo_link: false
        }
      })
    );
    return { isPassed: false, result };
  }
  return { isPassed: true };
}, "guardAccess");

// src/common/cache.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var MIN = 60;
var HOUR = 60 * MIN;
var DAY = 24 * HOUR;
var DURATIONS = {
  ONE_MINUTE: MIN,
  FIVE_MINUTES: 5 * MIN,
  TEN_MINUTES: 10 * MIN,
  FIFTEEN_MINUTES: 15 * MIN,
  THIRTY_MINUTES: 30 * MIN,
  TWO_HOURS: 2 * HOUR,
  FOUR_HOURS: 4 * HOUR,
  SIX_HOURS: 6 * HOUR,
  EIGHT_HOURS: 8 * HOUR,
  TWELVE_HOURS: 12 * HOUR,
  ONE_DAY: DAY,
  TWO_DAY: 2 * DAY,
  SIX_DAY: 6 * DAY,
  TEN_DAY: 10 * DAY
};
var CACHE_TTL = {
  STATS_CARD: {
    DEFAULT: DURATIONS.ONE_DAY,
    MIN: DURATIONS.TWELVE_HOURS,
    MAX: DURATIONS.TWO_DAY
  },
  TOP_LANGS_CARD: {
    DEFAULT: DURATIONS.SIX_DAY,
    MIN: DURATIONS.TWO_DAY,
    MAX: DURATIONS.TEN_DAY
  },
  PIN_CARD: {
    DEFAULT: DURATIONS.TEN_DAY,
    MIN: DURATIONS.ONE_DAY,
    MAX: DURATIONS.TEN_DAY
  },
  GIST_CARD: {
    DEFAULT: DURATIONS.TWO_DAY,
    MIN: DURATIONS.ONE_DAY,
    MAX: DURATIONS.TEN_DAY
  },
  WAKATIME_CARD: {
    DEFAULT: DURATIONS.ONE_DAY,
    MIN: DURATIONS.TWELVE_HOURS,
    MAX: DURATIONS.TWO_DAY
  },
  ERROR: DURATIONS.TEN_MINUTES
};
var resolveCacheSeconds = /* @__PURE__ */ __name(({ requested, def, min, max }) => {
  let cacheSeconds = clampValue(isNaN(requested) ? def : requested, min, max);
  if (process.env.CACHE_SECONDS) {
    const envCacheSeconds = parseInt(process.env.CACHE_SECONDS, 10);
    if (!isNaN(envCacheSeconds)) {
      cacheSeconds = envCacheSeconds;
    }
  }
  return cacheSeconds;
}, "resolveCacheSeconds");
var disableCaching = /* @__PURE__ */ __name((res) => {
  res.setHeader(
    "Cache-Control",
    "no-cache, no-store, must-revalidate, max-age=0, s-maxage=0"
  );
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");
}, "disableCaching");
var setCacheHeaders = /* @__PURE__ */ __name((res, cacheSeconds) => {
  if (cacheSeconds < 1 || true) {
    disableCaching(res);
    return;
  }
  res.setHeader(
    "Cache-Control",
    `max-age=${cacheSeconds}, s-maxage=${cacheSeconds}, stale-while-revalidate=${DURATIONS.ONE_DAY}`
  );
}, "setCacheHeaders");
var setErrorCacheHeaders = /* @__PURE__ */ __name((res) => {
  const envCacheSeconds = process.env.CACHE_SECONDS ? parseInt(process.env.CACHE_SECONDS, 10) : NaN;
  if (!isNaN(envCacheSeconds) && envCacheSeconds < 1 || true) {
    disableCaching(res);
    return;
  }
  res.setHeader(
    "Cache-Control",
    `max-age=${CACHE_TTL.ERROR}, s-maxage=${CACHE_TTL.ERROR}, stale-while-revalidate=${DURATIONS.ONE_DAY}`
  );
}, "setErrorCacheHeaders");

// src/fetchers/stats.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// worker/axios-shim.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
async function axios(config3) {
  const { url, method = "GET", headers = {}, data } = typeof config3 === "string" ? { url: config3 } : config3;
  const fetchOptions = {
    method: method.toUpperCase(),
    headers: { ...headers }
  };
  if (data) {
    fetchOptions.body = typeof data === "string" ? data : JSON.stringify(data);
    if (!fetchOptions.headers["Content-Type"]) {
      fetchOptions.headers["Content-Type"] = "application/json";
    }
  }
  const response = await fetch(url, fetchOptions);
  const text = await response.text();
  let responseData;
  try {
    responseData = JSON.parse(text);
  } catch {
    responseData = text;
  }
  return {
    data: responseData,
    status: response.status,
    statusText: response.statusText,
    headers: Object.fromEntries(response.headers.entries())
  };
}
__name(axios, "axios");
axios.get = (url, config3 = {}) => axios({ ...config3, url, method: "GET" });
axios.post = (url, data, config3 = {}) => axios({ ...config3, url, data, method: "POST" });
var axios_shim_default = axios;

// src/fetchers/stats.js
var dotenv = __toESM(require_main(), 1);

// node_modules/github-username-regex/module.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var module_default = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;

// src/calculateRank.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function exponential_cdf(x) {
  return 1 - 2 ** -x;
}
__name(exponential_cdf, "exponential_cdf");
function log_normal_cdf(x) {
  return x / (1 + x);
}
__name(log_normal_cdf, "log_normal_cdf");
function calculateRank({
  all_commits,
  commits,
  prs,
  issues,
  reviews,
  // eslint-disable-next-line no-unused-vars
  repos,
  // unused
  stars,
  followers
}) {
  const COMMITS_MEDIAN = all_commits ? 1e3 : 250, COMMITS_WEIGHT = 2;
  const PRS_MEDIAN = 50, PRS_WEIGHT = 3;
  const ISSUES_MEDIAN = 25, ISSUES_WEIGHT = 1;
  const REVIEWS_MEDIAN = 2, REVIEWS_WEIGHT = 1;
  const STARS_MEDIAN = 50, STARS_WEIGHT = 4;
  const FOLLOWERS_MEDIAN = 10, FOLLOWERS_WEIGHT = 1;
  const TOTAL_WEIGHT = COMMITS_WEIGHT + PRS_WEIGHT + ISSUES_WEIGHT + REVIEWS_WEIGHT + STARS_WEIGHT + FOLLOWERS_WEIGHT;
  const THRESHOLDS = [1, 12.5, 25, 37.5, 50, 62.5, 75, 87.5, 100];
  const LEVELS = ["S", "A+", "A", "A-", "B+", "B", "B-", "C+", "C"];
  const rank = 1 - (COMMITS_WEIGHT * exponential_cdf(commits / COMMITS_MEDIAN) + PRS_WEIGHT * exponential_cdf(prs / PRS_MEDIAN) + ISSUES_WEIGHT * exponential_cdf(issues / ISSUES_MEDIAN) + REVIEWS_WEIGHT * exponential_cdf(reviews / REVIEWS_MEDIAN) + STARS_WEIGHT * log_normal_cdf(stars / STARS_MEDIAN) + FOLLOWERS_WEIGHT * log_normal_cdf(followers / FOLLOWERS_MEDIAN)) / TOTAL_WEIGHT;
  const level = LEVELS[THRESHOLDS.findIndex((t) => rank * 100 <= t)];
  return { level, percentile: rank * 100 };
}
__name(calculateRank, "calculateRank");

// src/common/retryer.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// src/common/log.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var logger = false ? { log: noop, error: noop } : console;

// src/common/retryer.js
var getPATCount = /* @__PURE__ */ __name(() => Object.keys(process.env).filter((key) => /PAT_\d*$/.exec(key)).length, "getPATCount");
var getRETRIES = /* @__PURE__ */ __name(() => false ? 7 : getPATCount(), "getRETRIES");
var retryer = /* @__PURE__ */ __name(async (fetcher5, variables, retries = 0) => {
  const RETRIES2 = getRETRIES();
  if (!RETRIES2) {
    throw new CustomError("No GitHub API tokens found", CustomError.NO_TOKENS);
  }
  if (retries > RETRIES2) {
    throw new CustomError(
      "Downtime due to GitHub API rate limiting",
      CustomError.MAX_RETRY
    );
  }
  try {
    let response = await fetcher5(
      variables,
      // @ts-ignore
      process.env[`PAT_${retries + 1}`],
      // used in tests for faking rate limit
      retries
    );
    const errors = response?.data?.errors;
    const errorType = errors?.[0]?.type;
    const errorMsg = errors?.[0]?.message || "";
    const isRateLimited = errors && errorType === "RATE_LIMITED" || /rate limit/i.test(errorMsg);
    if (isRateLimited) {
      logger.log(`PAT_${retries + 1} Failed`);
      retries++;
      return retryer(fetcher5, variables, retries);
    }
    return response;
  } catch (err) {
    const e = err;
    if (!e?.response) {
      throw e;
    }
    const isBadCredential = e?.response?.data?.message === "Bad credentials";
    const isAccountSuspended = e?.response?.data?.message === "Sorry. Your account was suspended.";
    if (isBadCredential || isAccountSuspended) {
      logger.log(`PAT_${retries + 1} Failed`);
      retries++;
      return retryer(fetcher5, variables, retries);
    }
    return e.response;
  }
}, "retryer");
var RETRIES = getPATCount();

// src/common/http.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var request = /* @__PURE__ */ __name((data, headers) => {
  return axios_shim_default({
    url: "https://api.github.com/graphql",
    method: "post",
    headers,
    data
  });
}, "request");

// src/fetchers/stats.js
dotenv.config();
var GRAPHQL_REPOS_FIELD = `
  repositories(first: 100, ownerAffiliations: OWNER, orderBy: {direction: DESC, field: STARGAZERS}, after: $after) {
    totalCount
    nodes {
      name
      stargazers {
        totalCount
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
`;
var GRAPHQL_REPOS_QUERY = `
  query userInfo($login: String!, $after: String) {
    user(login: $login) {
      ${GRAPHQL_REPOS_FIELD}
    }
  }
`;
var GRAPHQL_STATS_QUERY = `
  query userInfo($login: String!, $after: String, $includeMergedPullRequests: Boolean!, $includeDiscussions: Boolean!, $includeDiscussionsAnswers: Boolean!, $startTime: DateTime = null) {
    user(login: $login) {
      name
      login
      commits: contributionsCollection (from: $startTime) {
        totalCommitContributions,
      }
      reviews: contributionsCollection {
        totalPullRequestReviewContributions
      }
      repositoriesContributedTo(first: 1, contributionTypes: [COMMIT, ISSUE, PULL_REQUEST, REPOSITORY]) {
        totalCount
      }
      pullRequests(first: 1) {
        totalCount
      }
      mergedPullRequests: pullRequests(states: MERGED) @include(if: $includeMergedPullRequests) {
        totalCount
      }
      openIssues: issues(states: OPEN) {
        totalCount
      }
      closedIssues: issues(states: CLOSED) {
        totalCount
      }
      followers {
        totalCount
      }
      repositoryDiscussions @include(if: $includeDiscussions) {
        totalCount
      }
      repositoryDiscussionComments(onlyAnswers: true) @include(if: $includeDiscussionsAnswers) {
        totalCount
      }
      ${GRAPHQL_REPOS_FIELD}
    }
  }
`;
var fetcher = /* @__PURE__ */ __name((variables, token) => {
  const query = variables.after ? GRAPHQL_REPOS_QUERY : GRAPHQL_STATS_QUERY;
  return request(
    {
      query,
      variables
    },
    {
      Authorization: `bearer ${token}`
    }
  );
}, "fetcher");
var statsFetcher = /* @__PURE__ */ __name(async ({
  username,
  includeMergedPullRequests,
  includeDiscussions,
  includeDiscussionsAnswers,
  startTime
}) => {
  let stats;
  let hasNextPage = true;
  let endCursor = null;
  while (hasNextPage) {
    const variables = {
      login: username,
      first: 100,
      after: endCursor,
      includeMergedPullRequests,
      includeDiscussions,
      includeDiscussionsAnswers,
      startTime
    };
    let res = await retryer(fetcher, variables);
    if (res.data.errors) {
      return res;
    }
    const repoNodes = res.data.data.user.repositories.nodes;
    if (stats) {
      stats.data.data.user.repositories.nodes.push(...repoNodes);
    } else {
      stats = res;
    }
    const repoNodesWithStars = repoNodes.filter(
      (node) => node.stargazers.totalCount !== 0
    );
    hasNextPage = process.env.FETCH_MULTI_PAGE_STARS === "true" && repoNodes.length === repoNodesWithStars.length && res.data.data.user.repositories.pageInfo.hasNextPage;
    endCursor = res.data.data.user.repositories.pageInfo.endCursor;
  }
  return stats;
}, "statsFetcher");
var fetchTotalCommits = /* @__PURE__ */ __name((variables, token) => {
  return axios_shim_default({
    method: "get",
    url: `https://api.github.com/search/commits?q=author:${variables.login}`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/vnd.github.cloak-preview",
      Authorization: `token ${token}`
    }
  });
}, "fetchTotalCommits");
var totalCommitsFetcher = /* @__PURE__ */ __name(async (username) => {
  if (!module_default.test(username)) {
    logger.log("Invalid username provided.");
    throw new Error("Invalid username provided.");
  }
  let res;
  try {
    res = await retryer(fetchTotalCommits, { login: username });
  } catch (err) {
    logger.log(err);
    throw new Error(err);
  }
  const totalCount = res.data.total_count;
  if (!totalCount || isNaN(totalCount)) {
    throw new CustomError(
      "Could not fetch total commits.",
      CustomError.GITHUB_REST_API_ERROR
    );
  }
  return totalCount;
}, "totalCommitsFetcher");
var fetchStats = /* @__PURE__ */ __name(async (username, include_all_commits = false, exclude_repo = [], include_merged_pull_requests = false, include_discussions = false, include_discussions_answers = false, commits_year) => {
  if (!username) {
    throw new MissingParamError(["username"]);
  }
  const stats = {
    name: "",
    totalPRs: 0,
    totalPRsMerged: 0,
    mergedPRsPercentage: 0,
    totalReviews: 0,
    totalCommits: 0,
    totalIssues: 0,
    totalStars: 0,
    totalDiscussionsStarted: 0,
    totalDiscussionsAnswered: 0,
    contributedTo: 0,
    rank: { level: "C", percentile: 100 }
  };
  let res = await statsFetcher({
    username,
    includeMergedPullRequests: include_merged_pull_requests,
    includeDiscussions: include_discussions,
    includeDiscussionsAnswers: include_discussions_answers,
    startTime: commits_year ? `${commits_year}-01-01T00:00:00Z` : void 0
  });
  if (res.data.errors) {
    logger.error(res.data.errors);
    if (res.data.errors[0].type === "NOT_FOUND") {
      throw new CustomError(
        res.data.errors[0].message || "Could not fetch user.",
        CustomError.USER_NOT_FOUND
      );
    }
    if (res.data.errors[0].message) {
      throw new CustomError(
        wrapTextMultiline(res.data.errors[0].message, 90, 1)[0],
        res.statusText
      );
    }
    throw new CustomError(
      "Something went wrong while trying to retrieve the stats data using the GraphQL API.",
      CustomError.GRAPHQL_ERROR
    );
  }
  const user = res.data.data.user;
  stats.name = user.name || user.login;
  if (include_all_commits) {
    stats.totalCommits = await totalCommitsFetcher(username);
  } else {
    stats.totalCommits = user.commits.totalCommitContributions;
  }
  stats.totalPRs = user.pullRequests.totalCount;
  if (include_merged_pull_requests) {
    stats.totalPRsMerged = user.mergedPullRequests.totalCount;
    stats.mergedPRsPercentage = user.mergedPullRequests.totalCount / user.pullRequests.totalCount * 100 || 0;
  }
  stats.totalReviews = user.reviews.totalPullRequestReviewContributions;
  stats.totalIssues = user.openIssues.totalCount + user.closedIssues.totalCount;
  if (include_discussions) {
    stats.totalDiscussionsStarted = user.repositoryDiscussions.totalCount;
  }
  if (include_discussions_answers) {
    stats.totalDiscussionsAnswered = user.repositoryDiscussionComments.totalCount;
  }
  stats.contributedTo = user.repositoriesContributedTo.totalCount;
  const allExcludedRepos = [...exclude_repo, ...excludeRepositories];
  let repoToHide = new Set(allExcludedRepos);
  stats.totalStars = user.repositories.nodes.filter((data) => {
    return !repoToHide.has(data.name);
  }).reduce((prev, curr) => {
    return prev + curr.stargazers.totalCount;
  }, 0);
  stats.rank = calculateRank({
    all_commits: include_all_commits,
    commits: stats.totalCommits,
    prs: stats.totalPRs,
    reviews: stats.totalReviews,
    issues: stats.totalIssues,
    repos: user.repositories.totalCount,
    stars: stats.totalStars,
    followers: user.followers.totalCount
  });
  return stats;
}, "fetchStats");

// api/index.js
var api_default = /* @__PURE__ */ __name(async (req, res) => {
  const {
    username,
    hide,
    hide_title,
    hide_border,
    card_width,
    hide_rank,
    show_icons,
    include_all_commits,
    commits_year,
    line_height,
    title_color,
    ring_color,
    icon_color,
    text_color,
    text_bold,
    bg_color,
    theme,
    cache_seconds,
    exclude_repo,
    custom_title,
    locale,
    disable_animations,
    border_radius,
    number_format,
    number_precision,
    border_color,
    rank_icon,
    show
  } = req.query;
  res.setHeader("Content-Type", "image/svg+xml");
  const access3 = guardAccess({
    res,
    id: username,
    type: "username",
    colors: {
      title_color,
      text_color,
      bg_color,
      border_color,
      theme
    }
  });
  if (!access3.isPassed) {
    return access3.result;
  }
  if (locale && !isLocaleAvailable(locale)) {
    return res.send(
      renderError({
        message: "Something went wrong",
        secondaryMessage: "Language not found",
        renderOptions: {
          title_color,
          text_color,
          bg_color,
          border_color,
          theme
        }
      })
    );
  }
  try {
    const showStats = parseArray(show);
    const stats = await fetchStats(
      username,
      parseBoolean(include_all_commits),
      parseArray(exclude_repo),
      showStats.includes("prs_merged") || showStats.includes("prs_merged_percentage"),
      showStats.includes("discussions_started"),
      showStats.includes("discussions_answered"),
      parseInt(commits_year, 10)
    );
    const cacheSeconds = resolveCacheSeconds({
      requested: parseInt(cache_seconds, 10),
      def: CACHE_TTL.STATS_CARD.DEFAULT,
      min: CACHE_TTL.STATS_CARD.MIN,
      max: CACHE_TTL.STATS_CARD.MAX
    });
    setCacheHeaders(res, cacheSeconds);
    return res.send(
      renderStatsCard(stats, {
        hide: parseArray(hide),
        show_icons: parseBoolean(show_icons),
        hide_title: parseBoolean(hide_title),
        hide_border: parseBoolean(hide_border),
        card_width: parseInt(card_width, 10),
        hide_rank: parseBoolean(hide_rank),
        include_all_commits: parseBoolean(include_all_commits),
        commits_year: parseInt(commits_year, 10),
        line_height,
        title_color,
        ring_color,
        icon_color,
        text_color,
        text_bold: parseBoolean(text_bold),
        bg_color,
        theme,
        custom_title,
        border_radius,
        border_color,
        number_format,
        number_precision: parseInt(number_precision, 10),
        locale: locale ? locale.toLowerCase() : null,
        disable_animations: parseBoolean(disable_animations),
        rank_icon,
        show: showStats
      })
    );
  } catch (err) {
    setErrorCacheHeaders(res);
    if (err instanceof Error) {
      return res.send(
        renderError({
          message: err.message,
          secondaryMessage: retrieveSecondaryMessage(err),
          renderOptions: {
            title_color,
            text_color,
            bg_color,
            border_color,
            theme,
            show_repo_link: !(err instanceof MissingParamError)
          }
        })
      );
    }
    return res.send(
      renderError({
        message: "An unknown error occurred",
        renderOptions: {
          title_color,
          text_color,
          bg_color,
          border_color,
          theme
        }
      })
    );
  }
}, "default");

// api/top-langs.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// src/cards/top-languages.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var DEFAULT_CARD_WIDTH = 300;
var MIN_CARD_WIDTH = 280;
var DEFAULT_LANG_COLOR = "#858585";
var CARD_PADDING = 25;
var COMPACT_LAYOUT_BASE_HEIGHT = 90;
var MAXIMUM_LANGS_COUNT = 20;
var NORMAL_LAYOUT_DEFAULT_LANGS_COUNT = 5;
var COMPACT_LAYOUT_DEFAULT_LANGS_COUNT = 6;
var DONUT_LAYOUT_DEFAULT_LANGS_COUNT = 5;
var PIE_LAYOUT_DEFAULT_LANGS_COUNT = 6;
var DONUT_VERTICAL_LAYOUT_DEFAULT_LANGS_COUNT = 6;
var getLongestLang = /* @__PURE__ */ __name((arr) => arr.reduce(
  (savedLang, lang) => lang.name.length > savedLang.name.length ? lang : savedLang,
  { name: "", size: 0, color: "" }
), "getLongestLang");
var degreesToRadians = /* @__PURE__ */ __name((angleInDegrees) => angleInDegrees * (Math.PI / 180), "degreesToRadians");
var polarToCartesian = /* @__PURE__ */ __name((centerX, centerY, radius, angleInDegrees) => {
  const rads = degreesToRadians(angleInDegrees);
  return {
    x: centerX + radius * Math.cos(rads),
    y: centerY + radius * Math.sin(rads)
  };
}, "polarToCartesian");
var getCircleLength = /* @__PURE__ */ __name((radius) => {
  return 2 * Math.PI * radius;
}, "getCircleLength");
var calculateCompactLayoutHeight = /* @__PURE__ */ __name((totalLangs) => {
  return COMPACT_LAYOUT_BASE_HEIGHT + Math.round(totalLangs / 2) * 25;
}, "calculateCompactLayoutHeight");
var calculateNormalLayoutHeight = /* @__PURE__ */ __name((totalLangs) => {
  return 45 + (totalLangs + 1) * 40;
}, "calculateNormalLayoutHeight");
var calculateDonutLayoutHeight = /* @__PURE__ */ __name((totalLangs) => {
  return 215 + Math.max(totalLangs - 5, 0) * 32;
}, "calculateDonutLayoutHeight");
var calculateDonutVerticalLayoutHeight = /* @__PURE__ */ __name((totalLangs) => {
  return 300 + Math.round(totalLangs / 2) * 25;
}, "calculateDonutVerticalLayoutHeight");
var calculatePieLayoutHeight = /* @__PURE__ */ __name((totalLangs) => {
  return 300 + Math.round(totalLangs / 2) * 25;
}, "calculatePieLayoutHeight");
var donutCenterTranslation = /* @__PURE__ */ __name((totalLangs) => {
  return -45 + Math.max(totalLangs - 5, 0) * 16;
}, "donutCenterTranslation");
var trimTopLanguages = /* @__PURE__ */ __name((topLangs, langs_count, hide) => {
  let langs = Object.values(topLangs);
  let langsToHide = {};
  let langsCount = clampValue(langs_count, 1, MAXIMUM_LANGS_COUNT);
  if (hide) {
    hide.forEach((langName) => {
      langsToHide[lowercaseTrim(langName)] = true;
    });
  }
  langs = langs.sort((a, b) => b.size - a.size).filter((lang) => {
    return !langsToHide[lowercaseTrim(lang.name)];
  }).slice(0, langsCount);
  const totalLanguageSize = langs.reduce((acc, curr) => acc + curr.size, 0);
  return { langs, totalLanguageSize };
}, "trimTopLanguages");
var getDisplayValue = /* @__PURE__ */ __name((size, percentages, format) => {
  return format === "bytes" ? formatBytes(size) : `${percentages.toFixed(2)}%`;
}, "getDisplayValue");
var createProgressTextNode = /* @__PURE__ */ __name(({
  width,
  color,
  name,
  size,
  totalSize,
  statsFormat,
  index
}) => {
  const staggerDelay = (index + 3) * 150;
  const paddingRight = 95;
  const progressTextX = width - paddingRight + 10;
  const progressWidth = width - paddingRight;
  const progress = size / totalSize * 100;
  const displayValue = getDisplayValue(size, progress, statsFormat);
  return `
    <g class="stagger" style="animation-delay: ${staggerDelay}ms">
      <text data-testid="lang-name" x="2" y="15" class="lang-name">${name}</text>
      <text x="${progressTextX}" y="34" class="lang-name">${displayValue}</text>
      ${createProgressNode({
    x: 0,
    y: 25,
    color,
    width: progressWidth,
    progress,
    progressBarBackgroundColor: "#ddd",
    delay: staggerDelay + 300
  })}
    </g>
  `;
}, "createProgressTextNode");
var createCompactLangNode = /* @__PURE__ */ __name(({
  lang,
  totalSize,
  hideProgress,
  statsFormat = "percentages",
  index
}) => {
  const percentages = lang.size / totalSize * 100;
  const displayValue = getDisplayValue(lang.size, percentages, statsFormat);
  const staggerDelay = (index + 3) * 150;
  const color = lang.color || "#858585";
  return `
    <g class="stagger" style="animation-delay: ${staggerDelay}ms">
      <circle cx="5" cy="6" r="5" fill="${color}" />
      <text data-testid="lang-name" x="15" y="10" class='lang-name'>
        ${lang.name} ${hideProgress ? "" : displayValue}
      </text>
    </g>
  `;
}, "createCompactLangNode");
var createLanguageTextNode = /* @__PURE__ */ __name(({
  langs,
  totalSize,
  hideProgress,
  statsFormat
}) => {
  const longestLang = getLongestLang(langs);
  const chunked = chunkArray(langs, langs.length / 2);
  const layouts = chunked.map((array) => {
    const items = array.map(
      (lang, index) => createCompactLangNode({
        lang,
        totalSize,
        hideProgress,
        statsFormat,
        index
      })
    );
    return flexLayout({
      items,
      gap: 25,
      direction: "column"
    }).join("");
  });
  const percent = (longestLang.size / totalSize * 100).toFixed(2);
  const minGap = 150;
  const maxGap = 20 + measureText(`${longestLang.name} ${percent}%`, 11);
  return flexLayout({
    items: layouts,
    gap: maxGap < minGap ? minGap : maxGap
  }).join("");
}, "createLanguageTextNode");
var createDonutLanguagesNode = /* @__PURE__ */ __name(({ langs, totalSize, statsFormat }) => {
  return flexLayout({
    items: langs.map((lang, index) => {
      return createCompactLangNode({
        lang,
        totalSize,
        hideProgress: false,
        statsFormat,
        index
      });
    }),
    gap: 32,
    direction: "column"
  }).join("");
}, "createDonutLanguagesNode");
var renderNormalLayout = /* @__PURE__ */ __name((langs, width, totalLanguageSize, statsFormat) => {
  return flexLayout({
    items: langs.map((lang, index) => {
      return createProgressTextNode({
        width,
        name: lang.name,
        color: lang.color || DEFAULT_LANG_COLOR,
        size: lang.size,
        totalSize: totalLanguageSize,
        statsFormat,
        index
      });
    }),
    gap: 40,
    direction: "column"
  }).join("");
}, "renderNormalLayout");
var renderCompactLayout = /* @__PURE__ */ __name((langs, width, totalLanguageSize, hideProgress, statsFormat = "percentages") => {
  const paddingRight = 50;
  const offsetWidth = width - paddingRight;
  let progressOffset = 0;
  const compactProgressBar = langs.map((lang) => {
    const percentage = parseFloat(
      (lang.size / totalLanguageSize * offsetWidth).toFixed(2)
    );
    const progress = percentage < 10 ? percentage + 10 : percentage;
    const output = `
        <rect
          mask="url(#rect-mask)"
          data-testid="lang-progress"
          x="${progressOffset}"
          y="0"
          width="${progress}"
          height="8"
          fill="${lang.color || "#858585"}"
        />
      `;
    progressOffset += percentage;
    return output;
  }).join("");
  return `
  ${hideProgress ? "" : `
      <mask id="rect-mask">
          <rect x="0" y="0" width="${offsetWidth}" height="8" fill="white" rx="5"/>
        </mask>
        ${compactProgressBar}
      `}
    <g transform="translate(0, ${hideProgress ? "0" : "25"})">
      ${createLanguageTextNode({
    langs,
    totalSize: totalLanguageSize,
    hideProgress,
    statsFormat
  })}
    </g>
  `;
}, "renderCompactLayout");
var renderDonutVerticalLayout = /* @__PURE__ */ __name((langs, totalLanguageSize, statsFormat) => {
  const radius = 80;
  const totalCircleLength = getCircleLength(radius);
  let circles = [];
  let indent = 0;
  let startDelayCoefficient = 1;
  for (const lang of langs) {
    const percentage = lang.size / totalLanguageSize * 100;
    const circleLength = totalCircleLength * (percentage / 100);
    const delay = startDelayCoefficient * 100;
    circles.push(`
      <g class="stagger" style="animation-delay: ${delay}ms">
        <circle 
          cx="150"
          cy="100"
          r="${radius}"
          fill="transparent"
          stroke="${lang.color}"
          stroke-width="25"
          stroke-dasharray="${totalCircleLength}"
          stroke-dashoffset="${indent}"
          size="${percentage}"
          data-testid="lang-donut"
        />
      </g>
    `);
    indent += circleLength;
    startDelayCoefficient += 1;
  }
  return `
    <svg data-testid="lang-items">
      <g transform="translate(0, 0)">
        <svg data-testid="donut">
          ${circles.join("")}
        </svg>
      </g>
      <g transform="translate(0, 220)">
        <svg data-testid="lang-names" x="${CARD_PADDING}">
          ${createLanguageTextNode({
    langs,
    totalSize: totalLanguageSize,
    hideProgress: false,
    statsFormat
  })}
        </svg>
      </g>
    </svg>
  `;
}, "renderDonutVerticalLayout");
var renderPieLayout = /* @__PURE__ */ __name((langs, totalLanguageSize, statsFormat) => {
  const radius = 90;
  const centerX = 150;
  const centerY = 100;
  let startAngle = 0;
  let startDelayCoefficient = 1;
  const paths = [];
  for (const lang of langs) {
    if (langs.length === 1) {
      paths.push(`
        <circle
          cx="${centerX}"
          cy="${centerY}"
          r="${radius}"
          stroke="none"
          fill="${lang.color}"
          data-testid="lang-pie"
          size="100"
        />
      `);
      break;
    }
    const langSizePart = lang.size / totalLanguageSize;
    const percentage = langSizePart * 100;
    const angle = langSizePart * 360;
    const endAngle = startAngle + angle;
    const startPoint = polarToCartesian(centerX, centerY, radius, startAngle);
    const endPoint = polarToCartesian(centerX, centerY, radius, endAngle);
    const largeArcFlag = angle > 180 ? 1 : 0;
    const delay = startDelayCoefficient * 100;
    paths.push(`
      <g class="stagger" style="animation-delay: ${delay}ms">
        <path
          data-testid="lang-pie"
          size="${percentage}"
          d="M ${centerX} ${centerY} L ${startPoint.x} ${startPoint.y} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endPoint.x} ${endPoint.y} Z"
          fill="${lang.color}"
        />
      </g>
    `);
    startAngle = endAngle;
    startDelayCoefficient += 1;
  }
  return `
    <svg data-testid="lang-items">
      <g transform="translate(0, 0)">
        <svg data-testid="pie">
          ${paths.join("")}
        </svg>
      </g>
      <g transform="translate(0, 220)">
        <svg data-testid="lang-names" x="${CARD_PADDING}">
          ${createLanguageTextNode({
    langs,
    totalSize: totalLanguageSize,
    hideProgress: false,
    statsFormat
  })}
        </svg>
      </g>
    </svg>
  `;
}, "renderPieLayout");
var createDonutPaths = /* @__PURE__ */ __name((cx, cy, radius, percentages) => {
  const paths = [];
  let startAngle = 0;
  let endAngle = 0;
  const totalPercent = percentages.reduce((acc, curr) => acc + curr, 0);
  for (let i = 0; i < percentages.length; i++) {
    const tmpPath = {};
    let percent = parseFloat(
      (percentages[i] / totalPercent * 100).toFixed(2)
    );
    endAngle = 3.6 * percent + startAngle;
    const startPoint = polarToCartesian(cx, cy, radius, endAngle - 90);
    const endPoint = polarToCartesian(cx, cy, radius, startAngle - 90);
    const largeArc = endAngle - startAngle <= 180 ? 0 : 1;
    tmpPath.percent = percent;
    tmpPath.d = `M ${startPoint.x} ${startPoint.y} A ${radius} ${radius} 0 ${largeArc} 0 ${endPoint.x} ${endPoint.y}`;
    paths.push(tmpPath);
    startAngle = endAngle;
  }
  return paths;
}, "createDonutPaths");
var renderDonutLayout = /* @__PURE__ */ __name((langs, width, totalLanguageSize, statsFormat) => {
  const centerX = width / 3;
  const centerY = width / 3;
  const radius = centerX - 60;
  const strokeWidth = 12;
  const colors = langs.map((lang) => lang.color);
  const langsPercents = langs.map(
    (lang) => parseFloat((lang.size / totalLanguageSize * 100).toFixed(2))
  );
  const langPaths = createDonutPaths(centerX, centerY, radius, langsPercents);
  const donutPaths = langs.length === 1 ? `<circle cx="${centerX}" cy="${centerY}" r="${radius}" stroke="${colors[0]}" fill="none" stroke-width="${strokeWidth}" data-testid="lang-donut" size="100"/>` : langPaths.map((section, index) => {
    const staggerDelay = (index + 3) * 100;
    const delay = staggerDelay + 300;
    const output = `
       <g class="stagger" style="animation-delay: ${delay}ms">
        <path
          data-testid="lang-donut"
          size="${section.percent}"
          d="${section.d}"
          stroke="${colors[index]}"
          fill="none"
          stroke-width="${strokeWidth}">
        </path>
      </g>
      `;
    return output;
  }).join("");
  const donut = `<svg width="${width}" height="${width}">${donutPaths}</svg>`;
  return `
    <g transform="translate(0, 0)">
      <g transform="translate(0, 0)">
        ${createDonutLanguagesNode({ langs, totalSize: totalLanguageSize, statsFormat })}
      </g>

      <g transform="translate(125, ${donutCenterTranslation(langs.length)})">
        ${donut}
      </g>
    </g>
  `;
}, "renderDonutLayout");
var noLanguagesDataNode = /* @__PURE__ */ __name(({ color, text, layout }) => {
  return `
    <text x="${layout === "pie" || layout === "donut-vertical" ? CARD_PADDING : 0}" y="11" class="stat bold" fill="${color}">${text}</text>
  `;
}, "noLanguagesDataNode");
var getDefaultLanguagesCountByLayout = /* @__PURE__ */ __name(({ layout, hide_progress }) => {
  if (layout === "compact" || hide_progress === true) {
    return COMPACT_LAYOUT_DEFAULT_LANGS_COUNT;
  } else if (layout === "donut") {
    return DONUT_LAYOUT_DEFAULT_LANGS_COUNT;
  } else if (layout === "donut-vertical") {
    return DONUT_VERTICAL_LAYOUT_DEFAULT_LANGS_COUNT;
  } else if (layout === "pie") {
    return PIE_LAYOUT_DEFAULT_LANGS_COUNT;
  } else {
    return NORMAL_LAYOUT_DEFAULT_LANGS_COUNT;
  }
}, "getDefaultLanguagesCountByLayout");
var renderTopLanguages = /* @__PURE__ */ __name((topLangs, options = {}) => {
  const {
    hide_title = false,
    hide_border = false,
    card_width,
    title_color,
    text_color,
    bg_color,
    hide,
    hide_progress,
    theme,
    layout,
    custom_title,
    locale,
    langs_count = getDefaultLanguagesCountByLayout({ layout, hide_progress }),
    border_radius,
    border_color,
    disable_animations,
    stats_format = "percentages"
  } = options;
  const i18n = new I18n({
    locale,
    translations: langCardLocales
  });
  const { langs, totalLanguageSize } = trimTopLanguages(
    topLangs,
    langs_count,
    hide
  );
  let width = card_width ? isNaN(card_width) ? DEFAULT_CARD_WIDTH : card_width < MIN_CARD_WIDTH ? MIN_CARD_WIDTH : card_width : DEFAULT_CARD_WIDTH;
  let height = calculateNormalLayoutHeight(langs.length);
  const colors = getCardColors({
    title_color,
    text_color,
    bg_color,
    border_color,
    theme
  });
  let finalLayout = "";
  if (langs.length === 0) {
    height = COMPACT_LAYOUT_BASE_HEIGHT;
    finalLayout = noLanguagesDataNode({
      color: colors.textColor,
      text: i18n.t("langcard.nodata"),
      layout
    });
  } else if (layout === "pie") {
    height = calculatePieLayoutHeight(langs.length);
    finalLayout = renderPieLayout(langs, totalLanguageSize, stats_format);
  } else if (layout === "donut-vertical") {
    height = calculateDonutVerticalLayoutHeight(langs.length);
    finalLayout = renderDonutVerticalLayout(
      langs,
      totalLanguageSize,
      stats_format
    );
  } else if (layout === "compact" || hide_progress == true) {
    height = calculateCompactLayoutHeight(langs.length) + (hide_progress ? -25 : 0);
    finalLayout = renderCompactLayout(
      langs,
      width,
      totalLanguageSize,
      hide_progress,
      stats_format
    );
  } else if (layout === "donut") {
    height = calculateDonutLayoutHeight(langs.length);
    width = width + 50;
    finalLayout = renderDonutLayout(
      langs,
      width,
      totalLanguageSize,
      stats_format
    );
  } else {
    finalLayout = renderNormalLayout(
      langs,
      width,
      totalLanguageSize,
      stats_format
    );
  }
  const card = new Card({
    customTitle: custom_title,
    defaultTitle: i18n.t("langcard.title"),
    width,
    height,
    border_radius,
    colors
  });
  if (disable_animations) {
    card.disableAnimations();
  }
  card.setHideBorder(hide_border);
  card.setHideTitle(hide_title);
  card.setCSS(
    `
    @keyframes slideInAnimation {
      from {
        width: 0;
      }
      to {
        width: calc(100%-100px);
      }
    }
    @keyframes growWidthAnimation {
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    }
    .stat {
      font: 600 14px 'Segoe UI', Ubuntu, "Helvetica Neue", Sans-Serif; fill: ${colors.textColor};
    }
    @supports(-moz-appearance: auto) {
      /* Selector detects Firefox */
      .stat { font-size:12px; }
    }
    .bold { font-weight: 700 }
    .lang-name {
      font: 400 11px "Segoe UI", Ubuntu, Sans-Serif;
      fill: ${colors.textColor};
    }
    .stagger {
      opacity: 0;
      animation: fadeInAnimation 0.3s ease-in-out forwards;
    }
    #rect-mask rect{
      animation: slideInAnimation 1s ease-in-out forwards;
    }
    .lang-progress{
      animation: growWidthAnimation 0.6s ease-in-out forwards;
    }
    `
  );
  if (layout === "pie" || layout === "donut-vertical") {
    return card.render(finalLayout);
  }
  return card.render(`
    <svg data-testid="lang-items" x="${CARD_PADDING}">
      ${finalLayout}
    </svg>
  `);
}, "renderTopLanguages");

// src/fetchers/top-languages.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var fetcher2 = /* @__PURE__ */ __name((variables, token) => {
  return request(
    {
      query: `
      query userInfo($login: String!) {
        user(login: $login) {
          # fetch only owner repos & not forks
          repositories(ownerAffiliations: OWNER, isFork: false, first: 100) {
            nodes {
              name
              languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
                edges {
                  size
                  node {
                    color
                    name
                  }
                }
              }
            }
          }
        }
      }
      `,
      variables
    },
    {
      Authorization: `token ${token}`
    }
  );
}, "fetcher");
var fetchTopLanguages = /* @__PURE__ */ __name(async (username, exclude_repo = [], size_weight = 1, count_weight = 0) => {
  if (!username) {
    throw new MissingParamError(["username"]);
  }
  const res = await retryer(fetcher2, { login: username });
  if (res.data.errors) {
    logger.error(res.data.errors);
    if (res.data.errors[0].type === "NOT_FOUND") {
      throw new CustomError(
        res.data.errors[0].message || "Could not fetch user.",
        CustomError.USER_NOT_FOUND
      );
    }
    if (res.data.errors[0].message) {
      throw new CustomError(
        wrapTextMultiline(res.data.errors[0].message, 90, 1)[0],
        res.statusText
      );
    }
    throw new CustomError(
      "Something went wrong while trying to retrieve the language data using the GraphQL API.",
      CustomError.GRAPHQL_ERROR
    );
  }
  let repoNodes = res.data.data.user.repositories.nodes;
  let repoToHide = {};
  const allExcludedRepos = [...exclude_repo, ...excludeRepositories];
  if (allExcludedRepos) {
    allExcludedRepos.forEach((repoName) => {
      repoToHide[repoName] = true;
    });
  }
  repoNodes = repoNodes.sort((a, b) => b.size - a.size).filter((name) => !repoToHide[name.name]);
  let repoCount = 0;
  repoNodes = repoNodes.filter((node) => node.languages.edges.length > 0).reduce((acc, curr) => curr.languages.edges.concat(acc), []).reduce((acc, prev) => {
    let langSize = prev.size;
    if (acc[prev.node.name] && prev.node.name === acc[prev.node.name].name) {
      langSize = prev.size + acc[prev.node.name].size;
      repoCount += 1;
    } else {
      repoCount = 1;
    }
    return {
      ...acc,
      [prev.node.name]: {
        name: prev.node.name,
        color: prev.node.color,
        size: langSize,
        count: repoCount
      }
    };
  }, {});
  Object.keys(repoNodes).forEach((name) => {
    repoNodes[name].size = Math.pow(repoNodes[name].size, size_weight) * Math.pow(repoNodes[name].count, count_weight);
  });
  const topLangs = Object.keys(repoNodes).sort((a, b) => repoNodes[b].size - repoNodes[a].size).reduce((result, key) => {
    result[key] = repoNodes[key];
    return result;
  }, {});
  return topLangs;
}, "fetchTopLanguages");

// api/top-langs.js
var top_langs_default = /* @__PURE__ */ __name(async (req, res) => {
  const {
    username,
    hide,
    hide_title,
    hide_border,
    card_width,
    title_color,
    text_color,
    bg_color,
    theme,
    cache_seconds,
    layout,
    langs_count,
    exclude_repo,
    size_weight,
    count_weight,
    custom_title,
    locale,
    border_radius,
    border_color,
    disable_animations,
    hide_progress,
    stats_format
  } = req.query;
  res.setHeader("Content-Type", "image/svg+xml");
  const access3 = guardAccess({
    res,
    id: username,
    type: "username",
    colors: {
      title_color,
      text_color,
      bg_color,
      border_color,
      theme
    }
  });
  if (!access3.isPassed) {
    return access3.result;
  }
  if (locale && !isLocaleAvailable(locale)) {
    return res.send(
      renderError({
        message: "Something went wrong",
        secondaryMessage: "Locale not found",
        renderOptions: {
          title_color,
          text_color,
          bg_color,
          border_color,
          theme
        }
      })
    );
  }
  if (layout !== void 0 && (typeof layout !== "string" || !["compact", "normal", "donut", "donut-vertical", "pie"].includes(layout))) {
    return res.send(
      renderError({
        message: "Something went wrong",
        secondaryMessage: "Incorrect layout input",
        renderOptions: {
          title_color,
          text_color,
          bg_color,
          border_color,
          theme
        }
      })
    );
  }
  if (stats_format !== void 0 && (typeof stats_format !== "string" || !["bytes", "percentages"].includes(stats_format))) {
    return res.send(
      renderError({
        message: "Something went wrong",
        secondaryMessage: "Incorrect stats_format input",
        renderOptions: {
          title_color,
          text_color,
          bg_color,
          border_color,
          theme
        }
      })
    );
  }
  try {
    const topLangs = await fetchTopLanguages(
      username,
      parseArray(exclude_repo),
      size_weight,
      count_weight
    );
    const cacheSeconds = resolveCacheSeconds({
      requested: parseInt(cache_seconds, 10),
      def: CACHE_TTL.TOP_LANGS_CARD.DEFAULT,
      min: CACHE_TTL.TOP_LANGS_CARD.MIN,
      max: CACHE_TTL.TOP_LANGS_CARD.MAX
    });
    setCacheHeaders(res, cacheSeconds);
    return res.send(
      renderTopLanguages(topLangs, {
        custom_title,
        hide_title: parseBoolean(hide_title),
        hide_border: parseBoolean(hide_border),
        card_width: parseInt(card_width, 10),
        hide: parseArray(hide),
        title_color,
        text_color,
        bg_color,
        theme,
        layout,
        langs_count,
        border_radius,
        border_color,
        locale: locale ? locale.toLowerCase() : null,
        disable_animations: parseBoolean(disable_animations),
        hide_progress: parseBoolean(hide_progress),
        stats_format
      })
    );
  } catch (err) {
    setErrorCacheHeaders(res);
    if (err instanceof Error) {
      return res.send(
        renderError({
          message: err.message,
          secondaryMessage: retrieveSecondaryMessage(err),
          renderOptions: {
            title_color,
            text_color,
            bg_color,
            border_color,
            theme,
            show_repo_link: !(err instanceof MissingParamError)
          }
        })
      );
    }
    return res.send(
      renderError({
        message: "An unknown error occurred",
        renderOptions: {
          title_color,
          text_color,
          bg_color,
          border_color,
          theme
        }
      })
    );
  }
}, "default");

// api/pin.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// src/cards/repo.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var ICON_SIZE = 16;
var DESCRIPTION_LINE_WIDTH = 59;
var DESCRIPTION_MAX_LINES = 3;
var getBadgeSVG = /* @__PURE__ */ __name((label, textColor) => `
  <g data-testid="badge" class="badge" transform="translate(320, -18)">
    <rect stroke="${textColor}" stroke-width="1" width="70" height="20" x="-12" y="-14" ry="10" rx="10"></rect>
    <text
      x="23" y="-5"
      alignment-baseline="central"
      dominant-baseline="central"
      text-anchor="middle"
      fill="${textColor}"
    >
      ${label}
    </text>
  </g>
`, "getBadgeSVG");
var renderRepoCard = /* @__PURE__ */ __name((repo, options = {}) => {
  const {
    name,
    nameWithOwner,
    description,
    primaryLanguage,
    isArchived,
    isTemplate,
    starCount,
    forkCount
  } = repo;
  const {
    hide_border = false,
    title_color,
    icon_color,
    text_color,
    bg_color,
    show_owner = false,
    theme = "default_repocard",
    border_radius,
    border_color,
    locale,
    description_lines_count
  } = options;
  const lineHeight = 10;
  const header = show_owner ? nameWithOwner : name;
  const langName = primaryLanguage && primaryLanguage.name || "Unspecified";
  const langColor = primaryLanguage && primaryLanguage.color || "#333";
  const descriptionMaxLines = description_lines_count ? clampValue(description_lines_count, 1, DESCRIPTION_MAX_LINES) : DESCRIPTION_MAX_LINES;
  const desc = parseEmojis(description || "No description provided");
  const multiLineDescription = wrapTextMultiline(
    desc,
    DESCRIPTION_LINE_WIDTH,
    descriptionMaxLines
  );
  const descriptionLinesCount = description_lines_count ? clampValue(description_lines_count, 1, DESCRIPTION_MAX_LINES) : multiLineDescription.length;
  const descriptionSvg = multiLineDescription.map((line) => `<tspan dy="1.2em" x="25">${encodeHTML(line)}</tspan>`).join("");
  const height = (descriptionLinesCount > 1 ? 120 : 110) + descriptionLinesCount * lineHeight;
  const i18n = new I18n({
    locale,
    translations: repoCardLocales
  });
  const colors = getCardColors({
    title_color,
    icon_color,
    text_color,
    bg_color,
    border_color,
    theme
  });
  const svgLanguage = primaryLanguage ? createLanguageNode(langName, langColor) : "";
  const totalStars = kFormatter(starCount);
  const totalForks = kFormatter(forkCount);
  const svgStars = iconWithLabel(
    icons.star,
    totalStars,
    "stargazers",
    ICON_SIZE
  );
  const svgForks = iconWithLabel(
    icons.fork,
    totalForks,
    "forkcount",
    ICON_SIZE
  );
  const starAndForkCount = flexLayout({
    items: [svgLanguage, svgStars, svgForks],
    sizes: [
      measureText(langName, 12),
      ICON_SIZE + measureText(`${totalStars}`, 12),
      ICON_SIZE + measureText(`${totalForks}`, 12)
    ],
    gap: 25
  }).join("");
  const card = new Card({
    defaultTitle: header.length > 35 ? `${header.slice(0, 35)}...` : header,
    titlePrefixIcon: icons.contribs,
    width: 400,
    height,
    border_radius,
    colors
  });
  card.disableAnimations();
  card.setHideBorder(hide_border);
  card.setHideTitle(false);
  card.setCSS(`
    .description { font: 400 13px 'Segoe UI', Ubuntu, Sans-Serif; fill: ${colors.textColor} }
    .gray { font: 400 12px 'Segoe UI', Ubuntu, Sans-Serif; fill: ${colors.textColor} }
    .icon { fill: ${colors.iconColor} }
    .badge { font: 600 11px 'Segoe UI', Ubuntu, Sans-Serif; }
    .badge rect { opacity: 0.2 }
  `);
  return card.render(`
    ${isTemplate ? (
    // @ts-ignore
    getBadgeSVG(i18n.t("repocard.template"), colors.textColor)
  ) : isArchived ? (
    // @ts-ignore
    getBadgeSVG(i18n.t("repocard.archived"), colors.textColor)
  ) : ""}

    <text class="description" x="25" y="-5">
      ${descriptionSvg}
    </text>

    <g transform="translate(30, ${height - 75})">
      ${starAndForkCount}
    </g>
  `);
}, "renderRepoCard");

// src/fetchers/repo.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var fetcher3 = /* @__PURE__ */ __name((variables, token) => {
  return request(
    {
      query: `
      fragment RepoInfo on Repository {
        name
        nameWithOwner
        isPrivate
        isArchived
        isTemplate
        stargazers {
          totalCount
        }
        description
        primaryLanguage {
          color
          id
          name
        }
        forkCount
      }
      query getRepo($login: String!, $repo: String!) {
        user(login: $login) {
          repository(name: $repo) {
            ...RepoInfo
          }
        }
        organization(login: $login) {
          repository(name: $repo) {
            ...RepoInfo
          }
        }
      }
    `,
      variables
    },
    {
      Authorization: `token ${token}`
    }
  );
}, "fetcher");
var urlExample = "/api/pin?username=USERNAME&amp;repo=REPO_NAME";
var fetchRepo = /* @__PURE__ */ __name(async (username, reponame) => {
  if (!username && !reponame) {
    throw new MissingParamError(["username", "repo"], urlExample);
  }
  if (!username) {
    throw new MissingParamError(["username"], urlExample);
  }
  if (!reponame) {
    throw new MissingParamError(["repo"], urlExample);
  }
  let res = await retryer(fetcher3, { login: username, repo: reponame });
  const data = res.data.data;
  if (!data.user && !data.organization) {
    throw new Error("Not found");
  }
  const isUser = data.organization === null && data.user;
  const isOrg = data.user === null && data.organization;
  if (isUser) {
    if (!data.user.repository || data.user.repository.isPrivate) {
      throw new Error("User Repository Not found");
    }
    return {
      ...data.user.repository,
      starCount: data.user.repository.stargazers.totalCount
    };
  }
  if (isOrg) {
    if (!data.organization.repository || data.organization.repository.isPrivate) {
      throw new Error("Organization Repository Not found");
    }
    return {
      ...data.organization.repository,
      starCount: data.organization.repository.stargazers.totalCount
    };
  }
  throw new Error("Unexpected behavior");
}, "fetchRepo");

// api/pin.js
var pin_default = /* @__PURE__ */ __name(async (req, res) => {
  const {
    username,
    repo,
    hide_border,
    title_color,
    icon_color,
    text_color,
    bg_color,
    theme,
    show_owner,
    cache_seconds,
    locale,
    border_radius,
    border_color,
    description_lines_count
  } = req.query;
  res.setHeader("Content-Type", "image/svg+xml");
  const access3 = guardAccess({
    res,
    id: username,
    type: "username",
    colors: {
      title_color,
      text_color,
      bg_color,
      border_color,
      theme
    }
  });
  if (!access3.isPassed) {
    return access3.result;
  }
  if (locale && !isLocaleAvailable(locale)) {
    return res.send(
      renderError({
        message: "Something went wrong",
        secondaryMessage: "Language not found",
        renderOptions: {
          title_color,
          text_color,
          bg_color,
          border_color,
          theme
        }
      })
    );
  }
  try {
    const repoData = await fetchRepo(username, repo);
    const cacheSeconds = resolveCacheSeconds({
      requested: parseInt(cache_seconds, 10),
      def: CACHE_TTL.PIN_CARD.DEFAULT,
      min: CACHE_TTL.PIN_CARD.MIN,
      max: CACHE_TTL.PIN_CARD.MAX
    });
    setCacheHeaders(res, cacheSeconds);
    return res.send(
      renderRepoCard(repoData, {
        hide_border: parseBoolean(hide_border),
        title_color,
        icon_color,
        text_color,
        bg_color,
        theme,
        border_radius,
        border_color,
        show_owner: parseBoolean(show_owner),
        locale: locale ? locale.toLowerCase() : null,
        description_lines_count
      })
    );
  } catch (err) {
    setErrorCacheHeaders(res);
    if (err instanceof Error) {
      return res.send(
        renderError({
          message: err.message,
          secondaryMessage: retrieveSecondaryMessage(err),
          renderOptions: {
            title_color,
            text_color,
            bg_color,
            border_color,
            theme,
            show_repo_link: !(err instanceof MissingParamError)
          }
        })
      );
    }
    return res.send(
      renderError({
        message: "An unknown error occurred",
        renderOptions: {
          title_color,
          text_color,
          bg_color,
          border_color,
          theme
        }
      })
    );
  }
}, "default");

// api/gist.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// src/cards/gist.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// src/common/languageColors.json
var languageColors_default = {
  "1C Enterprise": "#814CCC",
  "2-Dimensional Array": "#38761D",
  "4D": "#004289",
  ABAP: "#E8274B",
  "ABAP CDS": "#555e25",
  "AGS Script": "#B9D9FF",
  AIDL: "#34EB6B",
  AL: "#3AA2B5",
  AMPL: "#E6EFBB",
  ANTLR: "#9DC3FF",
  "API Blueprint": "#2ACCA8",
  APL: "#5A8164",
  "ASP.NET": "#9400ff",
  ATS: "#1ac620",
  ActionScript: "#882B0F",
  Ada: "#02f88c",
  "Adblock Filter List": "#800000",
  "Adobe Font Metrics": "#fa0f00",
  Agda: "#315665",
  Aiken: "#640ff8",
  Alloy: "#64C800",
  "Alpine Abuild": "#0D597F",
  "Altium Designer": "#A89663",
  AngelScript: "#C7D7DC",
  "Answer Set Programming": "#A9CC29",
  "Ant Build System": "#A9157E",
  Antlers: "#ff269e",
  ApacheConf: "#d12127",
  Apex: "#1797c0",
  "Apollo Guidance Computer": "#0B3D91",
  AppleScript: "#101F1F",
  Arc: "#aa2afe",
  ArkTS: "#0080ff",
  AsciiDoc: "#73a0c5",
  AspectJ: "#a957b0",
  Assembly: "#6E4C13",
  Astro: "#ff5a03",
  Asymptote: "#ff0000",
  Augeas: "#9CC134",
  AutoHotkey: "#6594b9",
  AutoIt: "#1C3552",
  "Avro IDL": "#0040FF",
  Awk: "#c30e9b",
  B4X: "#00e4ff",
  BASIC: "#ff0000",
  BQN: "#2b7067",
  Ballerina: "#FF5000",
  Batchfile: "#C1F12E",
  Beef: "#a52f4e",
  Berry: "#15A13C",
  BibTeX: "#778899",
  Bicep: "#519aba",
  Bikeshed: "#5562ac",
  Bison: "#6A463F",
  BitBake: "#00bce4",
  Blade: "#f7523f",
  BlitzBasic: "#00FFAE",
  BlitzMax: "#cd6400",
  Bluespec: "#12223c",
  "Bluespec BH": "#12223c",
  Boo: "#d4bec1",
  Boogie: "#c80fa0",
  Brainfuck: "#2F2530",
  BrighterScript: "#66AABB",
  Brightscript: "#662D91",
  Browserslist: "#ffd539",
  Bru: "#F4AA41",
  BuildStream: "#006bff",
  C: "#555555",
  "C#": "#178600",
  "C++": "#f34b7d",
  C3: "#2563eb",
  "CAP CDS": "#0092d1",
  CLIPS: "#00A300",
  CMake: "#DA3434",
  COLLADA: "#F1A42B",
  CSON: "#244776",
  CSS: "#663399",
  CSV: "#237346",
  CUE: "#5886E1",
  CWeb: "#00007a",
  "Cabal Config": "#483465",
  Caddyfile: "#22b638",
  Cadence: "#00ef8b",
  Cairo: "#ff4a48",
  "Cairo Zero": "#ff4a48",
  CameLIGO: "#3be133",
  Cangjie: "#00868B",
  "Cap'n Proto": "#c42727",
  Carbon: "#222222",
  Ceylon: "#dfa535",
  Chapel: "#8dc63f",
  ChucK: "#3f8000",
  Circom: "#707575",
  Cirru: "#ccccff",
  Clarion: "#db901e",
  Clarity: "#5546ff",
  "Classic ASP": "#6a40fd",
  Clean: "#3F85AF",
  Click: "#E4E6F3",
  Clojure: "#db5855",
  "Closure Templates": "#0d948f",
  "Cloud Firestore Security Rules": "#FFA000",
  Clue: "#0009b5",
  CodeQL: "#140f46",
  CoffeeScript: "#244776",
  ColdFusion: "#ed2cd6",
  "ColdFusion CFC": "#ed2cd6",
  "Common Lisp": "#3fb68b",
  "Common Workflow Language": "#B5314C",
  "Component Pascal": "#B0CE4E",
  Cooklang: "#E15A29",
  Crystal: "#000100",
  Csound: "#1a1a1a",
  "Csound Document": "#1a1a1a",
  "Csound Score": "#1a1a1a",
  Cuda: "#3A4E3A",
  Curry: "#531242",
  Cylc: "#00b3fd",
  Cypher: "#34c0eb",
  Cython: "#fedf5b",
  D: "#ba595e",
  D2: "#526ee8",
  DM: "#447265",
  Dafny: "#FFEC25",
  "Darcs Patch": "#8eff23",
  Dart: "#00B4AB",
  Daslang: "#d3d3d3",
  DataWeave: "#003a52",
  "Debian Package Control File": "#D70751",
  DenizenScript: "#FBEE96",
  Dhall: "#dfafff",
  "DirectX 3D File": "#aace60",
  Dockerfile: "#384d54",
  Dogescript: "#cca760",
  Dotenv: "#e5d559",
  Dune: "#89421e",
  Dylan: "#6c616e",
  E: "#ccce35",
  ECL: "#8a1267",
  ECLiPSe: "#001d9d",
  EJS: "#a91e50",
  EQ: "#a78649",
  Earthly: "#2af0ff",
  Easybuild: "#069406",
  "Ecere Projects": "#913960",
  Ecmarkup: "#eb8131",
  Edge: "#0dffe0",
  EdgeQL: "#31A7FF",
  EditorConfig: "#fff1f2",
  Eiffel: "#4d6977",
  Elixir: "#6e4a7e",
  Elm: "#60B5CC",
  Elvish: "#55BB55",
  "Elvish Transcript": "#55BB55",
  "Emacs Lisp": "#c065db",
  EmberScript: "#FFF4F3",
  Erlang: "#B83998",
  Euphoria: "#FF790B",
  "F#": "#b845fc",
  "F*": "#572e30",
  "FIGlet Font": "#FFDDBB",
  FIRRTL: "#2f632f",
  FLUX: "#88ccff",
  Factor: "#636746",
  Fancy: "#7b9db4",
  Fantom: "#14253c",
  Faust: "#c37240",
  Fennel: "#fff3d7",
  "Filebench WML": "#F6B900",
  Flix: "#d44a45",
  Fluent: "#ffcc33",
  Forth: "#341708",
  Fortran: "#4d41b1",
  "Fortran Free Form": "#4d41b1",
  FreeBASIC: "#141AC9",
  FreeMarker: "#0050b2",
  Frege: "#00cafe",
  Futhark: "#5f021f",
  "G-code": "#D08CF2",
  GAML: "#FFC766",
  GAMS: "#f49a22",
  GAP: "#0000cc",
  "GCC Machine Description": "#FFCFAB",
  GDScript: "#355570",
  GDShader: "#478CBF",
  GEDCOM: "#003058",
  GLSL: "#5686a5",
  GSC: "#FF6800",
  "Game Maker Language": "#71b417",
  "Gemfile.lock": "#701516",
  Gemini: "#ff6900",
  "Genero 4gl": "#63408e",
  "Genero per": "#d8df39",
  Genie: "#fb855d",
  Genshi: "#951531",
  "Gentoo Ebuild": "#9400ff",
  "Gentoo Eclass": "#9400ff",
  "Gerber Image": "#d20b00",
  Gherkin: "#5B2063",
  "Git Attributes": "#F44D27",
  "Git Commit": "#F44D27",
  "Git Config": "#F44D27",
  "Git Revision List": "#F44D27",
  Gleam: "#ffaff3",
  "Glimmer JS": "#F5835F",
  "Glimmer TS": "#3178c6",
  Glyph: "#c1ac7f",
  Gnuplot: "#f0a9f0",
  Go: "#00ADD8",
  "Go Checksums": "#00ADD8",
  "Go Module": "#00ADD8",
  "Go Workspace": "#00ADD8",
  "Godot Resource": "#355570",
  Golo: "#88562A",
  Gosu: "#82937f",
  Grace: "#615f8b",
  Gradle: "#02303a",
  "Gradle Kotlin DSL": "#02303a",
  "Grammatical Framework": "#ff0000",
  GraphQL: "#e10098",
  "Graphviz (DOT)": "#2596be",
  Groovy: "#4298b8",
  "Groovy Server Pages": "#4298b8",
  HAProxy: "#106da9",
  HCL: "#844FBA",
  HIP: "#4F3A4F",
  HLSL: "#aace60",
  HOCON: "#9ff8ee",
  HTML: "#e34c26",
  "HTML+ECR": "#2e1052",
  "HTML+EEX": "#6e4a7e",
  "HTML+ERB": "#701516",
  "HTML+PHP": "#4f5d95",
  "HTML+Razor": "#512be4",
  HTTP: "#005C9C",
  HXML: "#f68712",
  Hack: "#878787",
  Haml: "#ece2a9",
  Handlebars: "#f7931e",
  Harbour: "#0e60e3",
  Hare: "#9d7424",
  Haskell: "#5e5086",
  Haxe: "#df7900",
  HiveQL: "#dce200",
  HolyC: "#ffefaf",
  "Hosts File": "#308888",
  Hurl: "#FF0288",
  Hy: "#7790B2",
  IDL: "#a3522f",
  "IGOR Pro": "#0000cc",
  INI: "#d1dbe0",
  ISPC: "#2D68B1",
  Idris: "#b30000",
  "Ignore List": "#000000",
  "ImageJ Macro": "#99AAFF",
  Imba: "#16cec6",
  "Inno Setup": "#264b99",
  Io: "#a9188d",
  Ioke: "#078193",
  Isabelle: "#FEFE00",
  "Isabelle ROOT": "#FEFE00",
  J: "#9EEDFF",
  "JAR Manifest": "#b07219",
  JCL: "#d90e09",
  JFlex: "#DBCA00",
  JSON: "#292929",
  "JSON with Comments": "#292929",
  JSON5: "#267CB9",
  JSONLD: "#0c479c",
  JSONiq: "#40d47e",
  Jai: "#ab8b4b",
  Janet: "#0886a5",
  Jasmin: "#d03600",
  Java: "#b07219",
  "Java Properties": "#2A6277",
  "Java Server Pages": "#2A6277",
  "Java Template Engine": "#2A6277",
  JavaScript: "#f1e05a",
  "JavaScript+ERB": "#f1e05a",
  "Jest Snapshot": "#15c213",
  "JetBrains MPS": "#21D789",
  Jinja: "#a52a22",
  Jison: "#56b3cb",
  "Jison Lex": "#56b3cb",
  Jolie: "#843179",
  Jsonnet: "#0064bd",
  Julia: "#a270ba",
  "Julia REPL": "#a270ba",
  "Jupyter Notebook": "#DA5B0B",
  Just: "#384d54",
  KDL: "#ffb3b3",
  KRL: "#28430A",
  "Kaitai Struct": "#773b37",
  KakouneScript: "#6f8042",
  KerboScript: "#41adf0",
  "KiCad Layout": "#2f4aab",
  "KiCad Legacy Layout": "#2f4aab",
  "KiCad Schematic": "#2f4aab",
  "KoLmafia ASH": "#B9D9B9",
  Koka: "#215166",
  Kotlin: "#A97BFF",
  LFE: "#4C3023",
  LLVM: "#185619",
  LOLCODE: "#cc9900",
  LSL: "#3d9970",
  LabVIEW: "#fede06",
  Lark: "#2980B9",
  Lasso: "#999999",
  Latte: "#f2a542",
  Leo: "#C4FFC2",
  Less: "#1d365d",
  Lex: "#DBCA00",
  LigoLANG: "#0e74ff",
  LilyPond: "#9ccc7c",
  Liquid: "#67b8de",
  "Literate Agda": "#315665",
  "Literate CoffeeScript": "#244776",
  "Literate Haskell": "#5e5086",
  "LiveCode Script": "#0c5ba5",
  LiveScript: "#499886",
  Logtalk: "#295b9a",
  LookML: "#652B81",
  Lua: "#000080",
  Luau: "#00A2FF",
  M3U: "#179C7D",
  MATLAB: "#e16737",
  MAXScript: "#00a6a6",
  MDX: "#fcb32c",
  MLIR: "#5EC8DB",
  MQL4: "#62A8D6",
  MQL5: "#4A76B8",
  MTML: "#b7e1f4",
  Macaulay2: "#d8ffff",
  Makefile: "#427819",
  Mako: "#7e858d",
  Markdown: "#083fa1",
  Marko: "#42bff2",
  Mask: "#f97732",
  Max: "#c4a79c",
  Mercury: "#ff2b2b",
  Mermaid: "#ff3670",
  Meson: "#007800",
  Metal: "#8f14e9",
  MiniYAML: "#ff1111",
  MiniZinc: "#06a9e6",
  Mint: "#02b046",
  Mirah: "#c7a938",
  Modelica: "#de1d31",
  "Modula-2": "#10253f",
  "Modula-3": "#223388",
  Mojo: "#ff4c1f",
  "Monkey C": "#8D6747",
  MoonBit: "#b92381",
  MoonScript: "#ff4585",
  Motoko: "#fbb03b",
  "Motorola 68K Assembly": "#005daa",
  Move: "#4a137a",
  Mustache: "#724b3b",
  NCL: "#28431f",
  NMODL: "#00356B",
  "NPM Config": "#cb3837",
  NWScript: "#111522",
  Nasal: "#1d2c4e",
  Nearley: "#990000",
  Nemerle: "#3d3c6e",
  NetLinx: "#0aa0ff",
  "NetLinx+ERB": "#747faa",
  NetLogo: "#ff6375",
  NewLisp: "#87AED7",
  Nextflow: "#3ac486",
  Nginx: "#009639",
  Nickel: "#E0C3FC",
  Nim: "#ffc200",
  Nit: "#009917",
  Nix: "#7e7eff",
  Noir: "#2f1f49",
  Nu: "#c9df40",
  NumPy: "#9C8AF9",
  Nunjucks: "#3d8137",
  Nushell: "#4E9906",
  "OASv2-json": "#85ea2d",
  "OASv2-yaml": "#85ea2d",
  "OASv3-json": "#85ea2d",
  "OASv3-yaml": "#85ea2d",
  OCaml: "#ef7a08",
  "OMNeT++ MSG": "#a0e0a0",
  "OMNeT++ NED": "#08607c",
  ObjectScript: "#424893",
  "Objective-C": "#438eff",
  "Objective-C++": "#6866fb",
  "Objective-J": "#ff0c5a",
  Odin: "#60AFFE",
  Omgrofl: "#cabbff",
  Opal: "#f7ede0",
  "Open Policy Agent": "#7d9199",
  "OpenAPI Specification v2": "#85ea2d",
  "OpenAPI Specification v3": "#85ea2d",
  OpenCL: "#ed2e2d",
  "OpenEdge ABL": "#5ce600",
  OpenQASM: "#AA70FF",
  OpenSCAD: "#e5cd45",
  "Option List": "#476732",
  Org: "#77aa99",
  OverpassQL: "#cce2aa",
  Oxygene: "#cdd0e3",
  Oz: "#fab738",
  P4: "#7055b5",
  PDDL: "#0d00ff",
  "PEG.js": "#234d6b",
  PHP: "#4F5D95",
  PLSQL: "#dad8d8",
  PLpgSQL: "#336790",
  "POV-Ray SDL": "#6bac65",
  Pact: "#F7A8B8",
  Pan: "#cc0000",
  Papyrus: "#6600cc",
  Parrot: "#f3ca0a",
  Pascal: "#E3F171",
  Pawn: "#dbb284",
  Pep8: "#C76F5B",
  Perl: "#0298c3",
  PicoLisp: "#6067af",
  PigLatin: "#fcd7de",
  Pike: "#005390",
  "Pip Requirements": "#FFD343",
  Pkl: "#6b9543",
  PlantUML: "#fbbd16",
  PogoScript: "#d80074",
  Polar: "#ae81ff",
  Portugol: "#f8bd00",
  PostCSS: "#dc3a0c",
  PostScript: "#da291c",
  PowerBuilder: "#8f0f8d",
  PowerShell: "#012456",
  Praat: "#c8506d",
  Prisma: "#0c344b",
  Processing: "#0096D8",
  Procfile: "#3B2F63",
  Prolog: "#74283c",
  Promela: "#de0000",
  "Propeller Spin": "#7fa2a7",
  Pug: "#a86454",
  Puppet: "#302B6D",
  PureBasic: "#5a6986",
  PureScript: "#1D222D",
  Pyret: "#ee1e10",
  Python: "#3572A5",
  "Python console": "#3572A5",
  "Python traceback": "#3572A5",
  "Q#": "#fed659",
  QML: "#44a51c",
  "Qt Script": "#00b841",
  Quake: "#882233",
  QuakeC: "#975777",
  QuickBASIC: "#008080",
  R: "#198CE7",
  RAML: "#77d9fb",
  RBS: "#701516",
  RDoc: "#701516",
  REXX: "#d90e09",
  RMarkdown: "#198ce7",
  RON: "#a62c00",
  "ROS Interface": "#22314e",
  RPGLE: "#2BDE21",
  RUNOFF: "#665a4e",
  Racket: "#3c5caa",
  Ragel: "#9d5200",
  Raku: "#0000fb",
  Rascal: "#fffaa0",
  ReScript: "#ed5051",
  Reason: "#ff5847",
  ReasonLIGO: "#ff5847",
  Rebol: "#358a5b",
  "Record Jar": "#0673ba",
  Red: "#f50000",
  "Regular Expression": "#009a00",
  "Ren'Py": "#ff7f7f",
  Rez: "#FFDAB3",
  Ring: "#2D54CB",
  Riot: "#A71E49",
  RobotFramework: "#00c0b5",
  Roc: "#7c38f5",
  "Rocq Prover": "#d0b68c",
  Roff: "#ecdebe",
  "Roff Manpage": "#ecdebe",
  Rouge: "#cc0088",
  "RouterOS Script": "#DE3941",
  Ruby: "#701516",
  Rust: "#dea584",
  SAS: "#B34936",
  SCSS: "#c6538c",
  SPARQL: "#0C4597",
  SQF: "#3F3F3F",
  SQL: "#e38c00",
  SQLPL: "#e38c00",
  "SRecode Template": "#348a34",
  STL: "#373b5e",
  SVG: "#ff9900",
  Sail: "#259dd5",
  SaltStack: "#646464",
  Sass: "#a53b70",
  Scala: "#c22d40",
  Scaml: "#bd181a",
  Scenic: "#fdc700",
  Scheme: "#1e4aec",
  Scilab: "#ca0f21",
  Self: "#0579aa",
  ShaderLab: "#222c37",
  Shell: "#89e051",
  "ShellCheck Config": "#cecfcb",
  Shen: "#120F14",
  "Simple File Verification": "#C9BFED",
  Singularity: "#64E6AD",
  Slang: "#1fbec9",
  Slash: "#007eff",
  Slice: "#003fa2",
  Slim: "#2b2b2b",
  Slint: "#2379F4",
  SmPL: "#c94949",
  Smalltalk: "#596706",
  Smarty: "#f0c040",
  Smithy: "#c44536",
  Snakemake: "#419179",
  Solidity: "#AA6746",
  SourcePawn: "#f69e1d",
  Squirrel: "#800000",
  Stan: "#b2011d",
  "Standard ML": "#dc566d",
  Starlark: "#76d275",
  Stata: "#1a5f91",
  StringTemplate: "#3fb34f",
  Stylus: "#ff6347",
  "SubRip Text": "#9e0101",
  SugarSS: "#2fcc9f",
  SuperCollider: "#46390b",
  "Survex data": "#ffcc99",
  Svelte: "#ff3e00",
  Sway: "#00F58C",
  Sweave: "#198ce7",
  Swift: "#F05138",
  SystemVerilog: "#DAE1C2",
  "TI Program": "#A0AA87",
  "TL-Verilog": "#C40023",
  TLA: "#4b0079",
  TOML: "#9c4221",
  TSQL: "#e38c00",
  TSV: "#237346",
  TSX: "#3178c6",
  TXL: "#0178b8",
  Tact: "#48b5ff",
  Talon: "#333333",
  Tcl: "#e4cc98",
  TeX: "#3D6117",
  Teal: "#00B1BC",
  Terra: "#00004c",
  "Terraform Template": "#7b42bb",
  TextGrid: "#c8506d",
  "TextMate Properties": "#df66e4",
  Textile: "#ffe7ac",
  Thrift: "#D12127",
  Toit: "#c2c9fb",
  "Tor Config": "#59316b",
  "Tree-sitter Query": "#8ea64c",
  Turing: "#cf142b",
  Twig: "#c1d026",
  TypeScript: "#3178c6",
  TypeSpec: "#4A3665",
  Typst: "#239dad",
  "Unified Parallel C": "#4e3617",
  "Unity3D Asset": "#222c37",
  Uno: "#9933cc",
  UnrealScript: "#a54c4d",
  "Untyped Plutus Core": "#36adbd",
  UrWeb: "#ccccee",
  V: "#4f87c4",
  VBA: "#867db1",
  VBScript: "#15dcdc",
  VCL: "#148AA8",
  VHDL: "#adb2cb",
  Vala: "#a56de2",
  "Valve Data Format": "#f26025",
  "Velocity Template Language": "#507cff",
  Vento: "#ff0080",
  Verilog: "#b2b7f8",
  "Vim Help File": "#199f4b",
  "Vim Script": "#199f4b",
  "Vim Snippet": "#199f4b",
  "Visual Basic .NET": "#945db7",
  "Visual Basic 6.0": "#2c6353",
  Volt: "#1F1F1F",
  Vue: "#41b883",
  Vyper: "#9F4CF2",
  WDL: "#42f1f4",
  WGSL: "#1a5e9a",
  "Web Ontology Language": "#5b70bd",
  WebAssembly: "#04133b",
  "WebAssembly Interface Type": "#6250e7",
  Whiley: "#d5c397",
  Wikitext: "#fc5757",
  "Windows Registry Entries": "#52d5ff",
  "Witcher Script": "#ff0000",
  "Wolfram Language": "#dd1100",
  Wollok: "#a23738",
  "World of Warcraft Addon Data": "#f7e43f",
  Wren: "#383838",
  X10: "#4B6BEF",
  XC: "#99DA07",
  XML: "#0060ac",
  "XML Property List": "#0060ac",
  XQuery: "#5232e7",
  XSLT: "#EB8CEB",
  Xmake: "#22a079",
  Xojo: "#81bd41",
  Xonsh: "#285EEF",
  Xtend: "#24255d",
  YAML: "#cb171e",
  YARA: "#220000",
  YASnippet: "#32AB90",
  Yacc: "#4B6C4B",
  Yul: "#794932",
  ZAP: "#0d665e",
  ZIL: "#dc75e5",
  ZenScript: "#00BCD1",
  Zephir: "#118f9e",
  Zig: "#ec915c",
  Zimpl: "#d67711",
  Zmodel: "#ff7100",
  crontab: "#ead7ac",
  eC: "#913960",
  fish: "#4aae47",
  hoon: "#00b171",
  iCalendar: "#ec564c",
  jq: "#c7254e",
  kvlang: "#1da6e0",
  "mIRC Script": "#3d57c3",
  mcfunction: "#E22837",
  mdsvex: "#5f9ea0",
  mupad: "#244963",
  nanorc: "#2d004d",
  nesC: "#94B0C7",
  ooc: "#b0b77e",
  q: "#0040cd",
  reStructuredText: "#141414",
  sed: "#64b970",
  templ: "#66D0DD",
  vCard: "#ee2647",
  wisp: "#7582D1",
  xBase: "#403a40"
};

// src/cards/gist.js
var ICON_SIZE2 = 16;
var CARD_DEFAULT_WIDTH2 = 400;
var HEADER_MAX_LENGTH = 35;
var renderGistCard = /* @__PURE__ */ __name((gistData, options = {}) => {
  const { name, nameWithOwner, description, language, starsCount, forksCount } = gistData;
  const {
    title_color,
    icon_color,
    text_color,
    bg_color,
    theme,
    border_radius,
    border_color,
    show_owner = false,
    hide_border = false
  } = options;
  const { titleColor, textColor, iconColor, bgColor, borderColor } = getCardColors({
    title_color,
    icon_color,
    text_color,
    bg_color,
    border_color,
    theme
  });
  const lineWidth = 59;
  const linesLimit = 10;
  const desc = parseEmojis(description || "No description provided");
  const multiLineDescription = wrapTextMultiline(desc, lineWidth, linesLimit);
  const descriptionLines = multiLineDescription.length;
  const descriptionSvg = multiLineDescription.map((line) => `<tspan dy="1.2em" x="25">${encodeHTML(line)}</tspan>`).join("");
  const lineHeight = descriptionLines > 3 ? 12 : 10;
  const height = (descriptionLines > 1 ? 120 : 110) + descriptionLines * lineHeight;
  const totalStars = kFormatter(starsCount);
  const totalForks = kFormatter(forksCount);
  const svgStars = iconWithLabel(
    icons.star,
    totalStars,
    "starsCount",
    ICON_SIZE2
  );
  const svgForks = iconWithLabel(
    icons.fork,
    totalForks,
    "forksCount",
    ICON_SIZE2
  );
  const languageName = language || "Unspecified";
  const languageColor = languageColors_default[languageName] || "#858585";
  const svgLanguage = createLanguageNode(languageName, languageColor);
  const starAndForkCount = flexLayout({
    items: [svgLanguage, svgStars, svgForks],
    sizes: [
      measureText(languageName, 12),
      ICON_SIZE2 + measureText(`${totalStars}`, 12),
      ICON_SIZE2 + measureText(`${totalForks}`, 12)
    ],
    gap: 25
  }).join("");
  const header = show_owner ? nameWithOwner : name;
  const card = new Card_default({
    defaultTitle: header.length > HEADER_MAX_LENGTH ? `${header.slice(0, HEADER_MAX_LENGTH)}...` : header,
    titlePrefixIcon: icons.gist,
    width: CARD_DEFAULT_WIDTH2,
    height,
    border_radius,
    colors: {
      titleColor,
      textColor,
      iconColor,
      bgColor,
      borderColor
    }
  });
  card.setCSS(`
    .description { font: 400 13px 'Segoe UI', Ubuntu, Sans-Serif; fill: ${textColor} }
    .gray { font: 400 12px 'Segoe UI', Ubuntu, Sans-Serif; fill: ${textColor} }
    .icon { fill: ${iconColor} }
  `);
  card.setHideBorder(hide_border);
  return card.render(`
    <text class="description" x="25" y="-5">
        ${descriptionSvg}
    </text>

    <g transform="translate(30, ${height - 75})">
        ${starAndForkCount}
    </g>
  `);
}, "renderGistCard");

// src/fetchers/gist.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var QUERY = `
query gistInfo($gistName: String!) {
    viewer {
        gist(name: $gistName) {
            description
            owner {
                login
            }
            stargazerCount
            forks {
                totalCount
            }
            files {
                name
                language {
                    name
                }
                size
            }
        }
    }
}
`;
var fetcher4 = /* @__PURE__ */ __name(async (variables, token) => {
  return await request(
    { query: QUERY, variables },
    { Authorization: `token ${token}` }
  );
}, "fetcher");
var calculatePrimaryLanguage = /* @__PURE__ */ __name((files) => {
  const languages = {};
  for (const file of files) {
    if (file.language) {
      if (languages[file.language.name]) {
        languages[file.language.name] += file.size;
      } else {
        languages[file.language.name] = file.size;
      }
    }
  }
  let primaryLanguage = Object.keys(languages)[0];
  for (const language in languages) {
    if (languages[language] > languages[primaryLanguage]) {
      primaryLanguage = language;
    }
  }
  return primaryLanguage;
}, "calculatePrimaryLanguage");
var fetchGist = /* @__PURE__ */ __name(async (id) => {
  if (!id) {
    throw new MissingParamError(["id"], "/api/gist?id=GIST_ID");
  }
  const res = await retryer(fetcher4, { gistName: id });
  if (res.data.errors) {
    throw new Error(res.data.errors[0].message);
  }
  if (!res.data.data.viewer.gist) {
    throw new Error("Gist not found");
  }
  const data = res.data.data.viewer.gist;
  return {
    name: data.files[Object.keys(data.files)[0]].name,
    nameWithOwner: `${data.owner.login}/${data.files[Object.keys(data.files)[0]].name}`,
    description: data.description,
    language: calculatePrimaryLanguage(data.files),
    starsCount: data.stargazerCount,
    forksCount: data.forks.totalCount
  };
}, "fetchGist");

// api/gist.js
var gist_default = /* @__PURE__ */ __name(async (req, res) => {
  const {
    id,
    title_color,
    icon_color,
    text_color,
    bg_color,
    theme,
    cache_seconds,
    locale,
    border_radius,
    border_color,
    show_owner,
    hide_border
  } = req.query;
  res.setHeader("Content-Type", "image/svg+xml");
  const access3 = guardAccess({
    res,
    id,
    type: "gist",
    colors: {
      title_color,
      text_color,
      bg_color,
      border_color,
      theme
    }
  });
  if (!access3.isPassed) {
    return access3.result;
  }
  if (locale && !isLocaleAvailable(locale)) {
    return res.send(
      renderError({
        message: "Something went wrong",
        secondaryMessage: "Language not found",
        renderOptions: {
          title_color,
          text_color,
          bg_color,
          border_color,
          theme
        }
      })
    );
  }
  try {
    const gistData = await fetchGist(id);
    const cacheSeconds = resolveCacheSeconds({
      requested: parseInt(cache_seconds, 10),
      def: CACHE_TTL.GIST_CARD.DEFAULT,
      min: CACHE_TTL.GIST_CARD.MIN,
      max: CACHE_TTL.GIST_CARD.MAX
    });
    setCacheHeaders(res, cacheSeconds);
    return res.send(
      renderGistCard(gistData, {
        title_color,
        icon_color,
        text_color,
        bg_color,
        theme,
        border_radius,
        border_color,
        locale: locale ? locale.toLowerCase() : null,
        show_owner: parseBoolean(show_owner),
        hide_border: parseBoolean(hide_border)
      })
    );
  } catch (err) {
    setErrorCacheHeaders(res);
    if (err instanceof Error) {
      return res.send(
        renderError({
          message: err.message,
          secondaryMessage: retrieveSecondaryMessage(err),
          renderOptions: {
            title_color,
            text_color,
            bg_color,
            border_color,
            theme,
            show_repo_link: !(err instanceof MissingParamError)
          }
        })
      );
    }
    return res.send(
      renderError({
        message: "An unknown error occurred",
        renderOptions: {
          title_color,
          text_color,
          bg_color,
          border_color,
          theme
        }
      })
    );
  }
}, "default");

// api/wakatime.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// src/cards/wakatime.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var DEFAULT_CARD_WIDTH2 = 495;
var MIN_CARD_WIDTH2 = 250;
var COMPACT_LAYOUT_MIN_WIDTH = 400;
var DEFAULT_LINE_HEIGHT = 25;
var PROGRESSBAR_PADDING = 130;
var HIDDEN_PROGRESSBAR_PADDING = 170;
var COMPACT_LAYOUT_PROGRESSBAR_PADDING = 25;
var TOTAL_TEXT_WIDTH = 275;
var noCodingActivityNode = /* @__PURE__ */ __name(({ color, text }) => {
  return `
    <text x="25" y="11" class="stat bold" fill="${color}">${text}</text>
  `;
}, "noCodingActivityNode");
var formatLanguageValue = /* @__PURE__ */ __name(({ display_format, lang }) => {
  return display_format === "percent" ? `${lang.percent.toFixed(2).toString()} %` : lang.text;
}, "formatLanguageValue");
var createCompactLangNode2 = /* @__PURE__ */ __name(({ lang, x, y, display_format }) => {
  const color = languageColors_default[lang.name] || "#858585";
  const value = formatLanguageValue({ display_format, lang });
  return `
    <g transform="translate(${x}, ${y})">
      <circle cx="5" cy="6" r="5" fill="${color}" />
      <text data-testid="lang-name" x="15" y="10" class='lang-name'>
        ${lang.name} - ${value}
      </text>
    </g>
  `;
}, "createCompactLangNode");
var createLanguageTextNode2 = /* @__PURE__ */ __name(({ langs, y, display_format, card_width }) => {
  const LEFT_X = 25;
  const RIGHT_X_BASE = 230;
  const rightOffset = (card_width - DEFAULT_CARD_WIDTH2) / 2;
  const RIGHT_X = RIGHT_X_BASE + rightOffset;
  return langs.map((lang, index) => {
    const isLeft = index % 2 === 0;
    return createCompactLangNode2({
      lang,
      x: isLeft ? LEFT_X : RIGHT_X,
      y: y + DEFAULT_LINE_HEIGHT * Math.floor(index / 2),
      display_format
    });
  });
}, "createLanguageTextNode");
var createTextNode2 = /* @__PURE__ */ __name(({
  id,
  label,
  value,
  index,
  percent,
  hideProgress,
  progressBarColor,
  progressBarBackgroundColor,
  progressBarWidth
}) => {
  const staggerDelay = (index + 3) * 150;
  const cardProgress = hideProgress ? null : createProgressNode({
    x: 110,
    y: 4,
    progress: percent,
    color: progressBarColor,
    width: progressBarWidth,
    // @ts-ignore
    name: label,
    progressBarBackgroundColor,
    delay: staggerDelay + 300
  });
  return `
    <g class="stagger" style="animation-delay: ${staggerDelay}ms" transform="translate(25, 0)">
      <text class="stat bold" y="12.5" data-testid="${id}">${label}:</text>
      <text
        class="stat"
        x="${hideProgress ? HIDDEN_PROGRESSBAR_PADDING : PROGRESSBAR_PADDING + progressBarWidth}"
        y="12.5"
      >${value}</text>
      ${cardProgress}
    </g>
  `;
}, "createTextNode");
var recalculatePercentages = /* @__PURE__ */ __name((languages) => {
  const totalSum = languages.reduce(
    (totalSum2, language) => totalSum2 + language.percent,
    0
  );
  const weight = +(100 / totalSum).toFixed(2);
  languages.forEach((language) => {
    language.percent = +(language.percent * weight).toFixed(2);
  });
}, "recalculatePercentages");
var getStyles2 = /* @__PURE__ */ __name(({
  // eslint-disable-next-line no-unused-vars
  titleColor,
  textColor
}) => {
  return `
    .stat {
      font: 600 14px 'Segoe UI', Ubuntu, "Helvetica Neue", Sans-Serif; fill: ${textColor};
    }
    @supports(-moz-appearance: auto) {
      /* Selector detects Firefox */
      .stat { font-size:12px; }
    }
    .stagger {
      opacity: 0;
      animation: fadeInAnimation 0.3s ease-in-out forwards;
    }
    .not_bold { font-weight: 400 }
    .bold { font-weight: 700 }
  `;
}, "getStyles");
var normalizeCardWidth = /* @__PURE__ */ __name(({ value, layout }) => {
  if (value === void 0 || value === null || isNaN(value)) {
    return DEFAULT_CARD_WIDTH2;
  }
  return Math.max(
    layout === "compact" ? COMPACT_LAYOUT_MIN_WIDTH : MIN_CARD_WIDTH2,
    value
  );
}, "normalizeCardWidth");
var renderWakatimeCard = /* @__PURE__ */ __name((stats = {}, options = { hide: [] }) => {
  let { languages = [] } = stats;
  const {
    hide_title = false,
    hide_border = false,
    card_width,
    hide,
    line_height = DEFAULT_LINE_HEIGHT,
    title_color,
    icon_color,
    text_color,
    bg_color,
    theme = "default",
    hide_progress,
    custom_title,
    locale,
    layout,
    langs_count = languages.length,
    border_radius,
    border_color,
    display_format = "time",
    disable_animations
  } = options;
  const normalizedWidth = normalizeCardWidth({ value: card_width, layout });
  const shouldHideLangs = Array.isArray(hide) && hide.length > 0;
  if (shouldHideLangs) {
    const languagesToHide = new Set(hide.map((lang) => lowercaseTrim(lang)));
    languages = languages.filter(
      (lang) => !languagesToHide.has(lowercaseTrim(lang.name))
    );
  }
  languages = languages.slice(0, langs_count);
  recalculatePercentages(languages);
  const i18n = new I18n({
    locale,
    translations: wakatimeCardLocales
  });
  const lheight = parseInt(String(line_height), 10);
  const langsCount = clampValue(langs_count, 1, langs_count);
  const { titleColor, textColor, iconColor, bgColor, borderColor } = getCardColors({
    title_color,
    icon_color,
    text_color,
    bg_color,
    border_color,
    theme
  });
  const filteredLanguages = languages.filter((language) => language.hours || language.minutes).slice(0, langsCount);
  let height = Math.max(45 + (filteredLanguages.length + 1) * lheight, 150);
  const cssStyles = getStyles2({
    titleColor,
    textColor
  });
  let finalLayout = "";
  if (layout === "compact") {
    const width = normalizedWidth - 5;
    height = 90 + Math.round(filteredLanguages.length / 2) * DEFAULT_LINE_HEIGHT;
    let progressOffset = 0;
    const compactProgressBar = filteredLanguages.map((language) => {
      const progress = (width - COMPACT_LAYOUT_PROGRESSBAR_PADDING) * language.percent / 100;
      const languageColor = languageColors_default[language.name] || "#858585";
      const output = `
          <rect
            mask="url(#rect-mask)"
            data-testid="lang-progress"
            x="${progressOffset}"
            y="0"
            width="${progress}"
            height="8"
            fill="${languageColor}"
          />
        `;
      progressOffset += progress;
      return output;
    }).join("");
    finalLayout = `
      <mask id="rect-mask">
      <rect x="${COMPACT_LAYOUT_PROGRESSBAR_PADDING}" y="0" width="${width - 2 * COMPACT_LAYOUT_PROGRESSBAR_PADDING}" height="8" fill="white" rx="5" />
      </mask>
      ${compactProgressBar}
      ${filteredLanguages.length ? createLanguageTextNode2({
      y: 25,
      langs: filteredLanguages,
      display_format,
      card_width: normalizedWidth
    }).join("") : noCodingActivityNode({
      // @ts-ignore
      color: textColor,
      text: stats.is_coding_activity_visible ? stats.is_other_usage_visible ? i18n.t("wakatimecard.nocodingactivity") : i18n.t("wakatimecard.nocodedetails") : i18n.t("wakatimecard.notpublic")
    })}
    `;
  } else {
    finalLayout = flexLayout({
      items: filteredLanguages.length ? filteredLanguages.map((language, index) => {
        return createTextNode2({
          id: language.name,
          label: language.name,
          value: formatLanguageValue({ display_format, lang: language }),
          index,
          percent: language.percent,
          // @ts-ignore
          progressBarColor: titleColor,
          // @ts-ignore
          progressBarBackgroundColor: textColor,
          hideProgress: hide_progress,
          progressBarWidth: normalizedWidth - TOTAL_TEXT_WIDTH
        });
      }) : [
        noCodingActivityNode({
          // @ts-ignore
          color: textColor,
          text: stats.is_coding_activity_visible ? stats.is_other_usage_visible ? i18n.t("wakatimecard.nocodingactivity") : i18n.t("wakatimecard.nocodedetails") : i18n.t("wakatimecard.notpublic")
        })
      ],
      gap: lheight,
      direction: "column"
    }).join("");
  }
  let titleText = i18n.t("wakatimecard.title");
  switch (stats.range) {
    case "last_7_days":
      titleText += ` (${i18n.t("wakatimecard.last7days")})`;
      break;
    case "last_year":
      titleText += ` (${i18n.t("wakatimecard.lastyear")})`;
      break;
  }
  const card = new Card({
    customTitle: custom_title,
    defaultTitle: titleText,
    width: normalizedWidth,
    height,
    border_radius,
    colors: {
      titleColor,
      textColor,
      iconColor,
      bgColor,
      borderColor
    }
  });
  if (disable_animations) {
    card.disableAnimations();
  }
  card.setHideBorder(hide_border);
  card.setHideTitle(hide_title);
  card.setCSS(
    `
    ${cssStyles}
    @keyframes slideInAnimation {
      from {
        width: 0;
      }
      to {
        width: calc(100%-100px);
      }
    }
    @keyframes growWidthAnimation {
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    }
    .lang-name { font: 400 11px 'Segoe UI', Ubuntu, Sans-Serif; fill: ${textColor} }
    #rect-mask rect{
      animation: slideInAnimation 1s ease-in-out forwards;
    }
    .lang-progress{
      animation: growWidthAnimation 0.6s ease-in-out forwards;
    }
    `
  );
  return card.render(`
    <svg x="0" y="0" width="100%">
      ${finalLayout}
    </svg>
  `);
}, "renderWakatimeCard");

// src/fetchers/wakatime.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var fetchWakatimeStats = /* @__PURE__ */ __name(async ({ username, api_domain }) => {
  if (!username) {
    throw new MissingParamError(["username"]);
  }
  try {
    const { data } = await axios_shim_default.get(
      `https://${api_domain ? api_domain.replace(/\/$/gi, "") : "wakatime.com"}/api/v1/users/${username}/stats?is_including_today=true`
    );
    return data.data;
  } catch (err) {
    if (err.response.status < 200 || err.response.status > 299) {
      throw new CustomError(
        `Could not resolve to a User with the login of '${username}'`,
        "WAKATIME_USER_NOT_FOUND"
      );
    }
    throw err;
  }
}, "fetchWakatimeStats");

// api/wakatime.js
var wakatime_default = /* @__PURE__ */ __name(async (req, res) => {
  const {
    username,
    title_color,
    icon_color,
    hide_border,
    card_width,
    line_height,
    text_color,
    bg_color,
    theme,
    cache_seconds,
    hide_title,
    hide_progress,
    custom_title,
    locale,
    layout,
    langs_count,
    hide,
    api_domain,
    border_radius,
    border_color,
    display_format,
    disable_animations
  } = req.query;
  res.setHeader("Content-Type", "image/svg+xml");
  const access3 = guardAccess({
    res,
    id: username,
    type: "wakatime",
    colors: {
      title_color,
      text_color,
      bg_color,
      border_color,
      theme
    }
  });
  if (!access3.isPassed) {
    return access3.result;
  }
  if (locale && !isLocaleAvailable(locale)) {
    return res.send(
      renderError({
        message: "Something went wrong",
        secondaryMessage: "Language not found",
        renderOptions: {
          title_color,
          text_color,
          bg_color,
          border_color,
          theme
        }
      })
    );
  }
  try {
    const stats = await fetchWakatimeStats({ username, api_domain });
    const cacheSeconds = resolveCacheSeconds({
      requested: parseInt(cache_seconds, 10),
      def: CACHE_TTL.WAKATIME_CARD.DEFAULT,
      min: CACHE_TTL.WAKATIME_CARD.MIN,
      max: CACHE_TTL.WAKATIME_CARD.MAX
    });
    setCacheHeaders(res, cacheSeconds);
    return res.send(
      renderWakatimeCard(stats, {
        custom_title,
        hide_title: parseBoolean(hide_title),
        hide_border: parseBoolean(hide_border),
        card_width: parseInt(card_width, 10),
        hide: parseArray(hide),
        line_height,
        title_color,
        icon_color,
        text_color,
        bg_color,
        theme,
        hide_progress,
        border_radius,
        border_color,
        locale: locale ? locale.toLowerCase() : null,
        layout,
        langs_count,
        display_format,
        disable_animations: parseBoolean(disable_animations)
      })
    );
  } catch (err) {
    setErrorCacheHeaders(res);
    if (err instanceof Error) {
      return res.send(
        renderError({
          message: err.message,
          secondaryMessage: retrieveSecondaryMessage(err),
          renderOptions: {
            title_color,
            text_color,
            bg_color,
            border_color,
            theme,
            show_repo_link: !(err instanceof MissingParamError)
          }
        })
      );
    }
    return res.send(
      renderError({
        message: "An unknown error occurred",
        renderOptions: {
          title_color,
          text_color,
          bg_color,
          border_color,
          theme
        }
      })
    );
  }
}, "default");

// worker/cf-worker-entry.js
var routes = {
  "/": api_default,
  "/api": api_default,
  "/api/top-langs": top_langs_default,
  "/api/pin": pin_default,
  "/api/gist": gist_default,
  "/api/wakatime": wakatime_default
};
var adaptedRoutes = {};
for (const [path, handler] of Object.entries(routes)) {
  adaptedRoutes[path] = adaptVercelHandler(handler);
}
var cf_worker_entry_default = {
  async fetch(request2, env2, ctx) {
    if (env2) {
      for (const [key, value] of Object.entries(env2)) {
        if (typeof value === "string") {
          process.env[key] = value;
        }
      }
    }
    const url = new URL(request2.url);
    const path = url.pathname.replace(/\/+$/, "").toLowerCase() || "/";
    const handler = adaptedRoutes[path];
    if (!handler) {
      return new Response(JSON.stringify({
        error: "Not Found",
        routes: Object.keys(routes)
      }), {
        status: 404,
        headers: { "Content-Type": "application/json" }
      });
    }
    try {
      const resp = await handler(request2, env2);
      const body = await resp.clone().text();
      if (body.includes("Something went wrong")) {
        console.error("[worker] App returned error SVG. PAT count:", Object.keys(process.env).filter((k) => /PAT_\d/.test(k)).length);
      }
      return resp;
    } catch (err) {
      console.error("[worker] Error:", err.message, err.stack);
      return new Response(JSON.stringify({ error: err.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
  }
};

// ../../../Roaming/npm/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var drainBody = /* @__PURE__ */ __name(async (request2, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request2, env2);
  } finally {
    try {
      if (request2.body !== null && !request2.bodyUsed) {
        const reader = request2.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// ../../../Roaming/npm/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request2, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request2, env2);
  } catch (e) {
    const error3 = reduceError(e);
    return Response.json(error3, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-lIlnvp/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = cf_worker_entry_default;

// ../../../Roaming/npm/node_modules/wrangler/templates/middleware/common.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request2, env2, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request2, env2, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request2, env2, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request2, env2, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-lIlnvp/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request2, env2, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request2, env2, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request2, env2, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type2, init) {
        if (type2 === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env2, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request2, env2, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request2, env2, ctx) => {
      this.env = env2;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request2);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type2, init) => {
      if (type2 === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request2) {
      return __facade_invoke__(
        request2,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
/*! Bundled license information:

word-wrap/index.js:
  (*!
   * word-wrap <https://github.com/jonschlinkert/word-wrap>
   *
   * Copyright (c) 2014-2023, Jon Schlinkert.
   * Released under the MIT License.
   *)
*/
//# sourceMappingURL=cf-worker-entry.js.map
