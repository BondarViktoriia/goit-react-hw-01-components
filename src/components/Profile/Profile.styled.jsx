import styled from '@emotion/styled';

export const ProfileCard = styled.div`
   padding:30px;
   margin: auto;
   background: ${p=>p.theme.colors.background};
   color: ${p=>p.theme.colors.text};
`;

export const Description = styled.div`
    justify-content: center;
    text-align:center;
`;

export const Avatar = styled.img`
    border-radius:50%;
    border: 6px solid ${p=>p.theme.colors.accent};
  
`;

export const AvatarName = styled.p`
    color: ${p=>p.theme.colors.accent};
    font-weight:bold;
    margin-top:20px;
`;
export const Tag = styled.p`
 margin-top: 10px;
`;
export const Location = styled.p`
    margin-top:10px;
`;

export const Stats = styled.ul`
display:flex;


`;

export const Quantiny = styled.span`
    display:block;
`;
export const Label = styled.span`
  :not(:last-child){
    margin-right: 25px;
    color:${p=>p.theme.colors.accent};
  }

`;