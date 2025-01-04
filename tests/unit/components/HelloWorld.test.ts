import MyComponent from '@/components/HelloWorld.vue';
import { describe, expect, it } from 'vitest';
import { render, screen } from '~/unit';

describe('helloWorld.vue', () => {
  it('should render correctly with props', async () => {
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
