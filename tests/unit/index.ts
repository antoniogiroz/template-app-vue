import type { RenderOptions, RenderResult } from '@testing-library/vue';
import router from '@/router';
import { VueQueryPlugin } from '@tanstack/vue-query';
import UserEvent from '@testing-library/user-event';
import { render as tlRender } from '@testing-library/vue';
import { RouterLinkStub } from '@vue/test-utils';

interface RenderResultWithUser extends RenderResult {
  user: typeof UserEvent;
}

export * from '@testing-library/vue';

export function render<T>(testComponent: T, options: RenderOptions<T> = {}): RenderResultWithUser {
  return {
    user: UserEvent.setup() as unknown as typeof UserEvent,
    ...tlRender(testComponent, {
      ...options,
      global: {
        ...options?.global,
        plugins: [VueQueryPlugin],
      },
    }),
  };
}

export function renderWithRouter<T>(testComponent: T, options: RenderOptions<T> = {}): RenderResultWithUser {
  return {
    ...render(testComponent, {
      ...options,
      global: {
        ...options?.global,
        plugins: [VueQueryPlugin, router],
        stubs: { RouterLink: RouterLinkStub },
      },
    }),
  };
}
