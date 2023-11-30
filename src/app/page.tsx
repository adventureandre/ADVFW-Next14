'use client';

import styled from 'styled-components';
import {Skeleton} from "@/components/Skeleton";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem /* 24px */;
`;

const Ver =  styled.div`
background: ${(props) => props.theme['gray-500']};
`;


export default function Page() {
  return (
      <div className="space-y-4">
        <h1 className="text-xl font-medium text-gray-400/80">
          Styled with Styled Components
        </h1>
        <Container>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </Container>
          <Ver>VAMOS VER</Ver>
      </div>
  );
}