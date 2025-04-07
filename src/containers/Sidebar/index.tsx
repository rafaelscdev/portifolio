import { SidebarContainer, NomeCompleto, Nome, Sobrenome } from './styles'

const Sidebar = () => (
  <SidebarContainer>
    <img src="https://github.com/rafaelscdev.png" alt="Foto de Rafael Correa" />
    <NomeCompleto>
      <Nome>Rafael</Nome>
      <Sobrenome>Correa</Sobrenome>
    </NomeCompleto>
  </SidebarContainer>
)

export default Sidebar
