import { describe, expect, test } from 'vitest';
import { render, screen } from '~/unit';
import MyComponent from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  test('should render correctly with props', async () => {
    const props = {
      msg: 'Hello, World!',
    };

    render(MyComponent, {
      props,
    });

    const heading = await screen.findByRole('heading', { name: props.msg });

    expect(heading).toBeInTheDocument();
  });
});
