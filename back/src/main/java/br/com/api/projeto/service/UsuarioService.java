package br.com.api.projeto.service;

import java.util.List;

import org.springframework.stereotype.Service;

import br.com.api.projeto.DAO.IUsuario;
import br.com.api.projeto.model.Usuario;

@Service
public class UsuarioService {
	
	private IUsuario dao;
	
	public UsuarioService(IUsuario dao) {
		this.dao = dao;
	}
	
	public List<Usuario> listarUsuario() {
		List<Usuario> lista = (List<Usuario>) dao.findAll();
		return lista;
	}
	
	public Usuario criarUsuario(Usuario usuario) {
		Usuario usuarioNovo = dao.save(usuario);
		return usuarioNovo;
	}
	
	public Usuario editarUsuario(Usuario usuario) {
		Usuario usuarioNovo = dao.save(usuario);
		return usuarioNovo;
	}
	
	public Boolean excluirUsuario(Integer id) {
		dao.deleteById(id);
		return true;
	}

}
