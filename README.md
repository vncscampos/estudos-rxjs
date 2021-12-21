# RxJS com Angular

## O que é
Uma biblioteca que permite criar programas assíncronos e baseados em evento através de Observables.

## Principais Termos

### Observables
- Qualquer stream de dados. 
- Um conjunto de valores.
- Emite um número finito ou infinito de valores.

### Observer 
- Observa a stream.

~~~typescript
interface Observer<T> {
  next: (value: T) => void
  error: (err: any) => void
  complete: () => void
}
~~~

### Subscriber
- Um observer que pode ser unsubscribe

### Subscription
- Representa uma execução de um Observable
- subscribe() retorna uma Subscription

### Principais Operadores


## Documentaçao
https://rxjs.dev/
