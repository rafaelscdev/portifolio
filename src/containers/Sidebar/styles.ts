import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const BotaoTema = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: #eee;
  font-size: 10px;
  font-weight: bold;
  background-color: #282a35;
  cursor: pointer;
  border: none;
  width: 100%;
`

export const SidebarContainer = styled.aside`
  position: sticky;
  top: 0;
  left: 0;
  text-align: center;
  width: 100%;
  height: fit-content;

  img {
    max-width: 100%;
    border-radius: 50%;
    margin-bottom: 24px;
  }

  h3 {
    margin-bottom: 8px;
  }

  @media (max-width: 768px) {
    position: static;
    max-width: 100%;
    margin-bottom: 40px;

    img {
      max-width: 128px;
      margin: 0 auto 24px;
      display: block;
    }
  }
`
