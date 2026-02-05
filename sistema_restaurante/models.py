# Importa a classe Column e tipos de dados para definir colunas na tabela
from sqlalchemy import Column, Integer, String, ForeignKey
# Importa a base declarativa e o recurso de relacionamento entre tabelas
from sqlalchemy.orm import declarative_base , relationship
Base = declarative_base () # Cria a classe base usada para declarar modelos ORM
class Usuario(Base): # Declaração da classe Usuario
 __tablename__ = "usuarios" # Nome da tabela no banco de dados
 id = Column(Integer, primary_key=True) # Coluna "id", do tipo inteiro, chave primária da tabela
 nome = Column(String) # Coluna "nome", do tipo string
 email = Column(String) # Coluna "email", também do tipo string