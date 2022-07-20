import {
  animate,
  animateChild,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const authAnimation = trigger('routeAnimations', [
  transition('* => *', [
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          opacity: 0,
          transform: 'translateX(-150%)',
        }),
      ],
      { optional: true }
    ),
    query(
      ':enter',
      [
        animate(
          '1000ms ease',
          style({
            opacity: 1,
            transform: 'translateX(0)',
            position: 'relative',
          })
        ),
        animateChild(),
      ],
      { optional: true }
    ),
  ]),
]);
