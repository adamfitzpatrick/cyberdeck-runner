declare module 'json-schema-faker' {
    function extender<T>(): T
    export function extend(name: string, extender)
    export function generate<T>(schema: object): T;
}

declare module 'faker' {}