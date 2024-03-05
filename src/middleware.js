export function onRequest({locals, request}, next){
    locals.title = "新しいタイトル";
    return next();
}