import { motion, SVGMotionProps } from 'framer-motion';
import { RefAttributes } from 'react';
import styled from 'styled-components';

const MenuToggle = ({ toggle, isOpen }: any) => {
  const transition = { duration: 0.33 };

  return (
    <Button onClick={toggle}>
      <svg width='23' height='23' viewBox='0 0 23 23'>
        <Path
          animate={isOpen ? 'open' : 'closed'}
          initial={false}
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5', stroke: 'hsl(0, 0%, 0%)' },
            open: { d: 'M 3 16.5 L 17 2.5', stroke: 'hsl(0, 0%, 0%)' },
          }}
          transition={transition}
        />
        <Path
          d='M 2 9.423 L 20 9.423'
          stroke='hsl(0, 0%, 0%)'
          animate={isOpen ? 'open' : 'closed'}
          initial={false}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={transition}
        />
        <Path
          animate={isOpen ? 'open' : 'closed'}
          initial={false}
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346', stroke: 'hsl(0, 0%, 0%)' },
            open: { d: 'M 3 2.5 L 17 16.346', stroke: 'hsl(0, 0%, 0%)' },
          }}
          transition={transition}
        />
      </svg>
    </Button>
  );
};

export default MenuToggle;

const Button = styled.div`
  z-index: 60;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Path = (
  props: JSX.IntrinsicAttributes &
    SVGMotionProps<SVGPathElement> &
    RefAttributes<SVGPathElement>
) => (
  <motion.path
    fill='transpoarent'
    strokeLinecap='round'
    strokeWidth='3'
    {...props}
  />
);
