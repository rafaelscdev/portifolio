import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <SidebarContainer>
    <Avatar />
    <Titulo fontSize={20}>Rafael Corrêa</Titulo>
    <Paragrafo tipo="secundario" fontSize={16}>
      rafaelscdev
    </Paragrafo>
    <Descricao tipo="principal" fontSize={12}>
      Engenheiro front-end
    </Descricao>
    <BotaoTema>Trocar tema</BotaoTema>
  </SidebarContainer>
)

export default Sidebar
