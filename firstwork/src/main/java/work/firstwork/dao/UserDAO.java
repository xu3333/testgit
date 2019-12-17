package work.firstwork.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import work.firstwork.pojo.User;

public interface UserDAO extends JpaRepository<User,Integer> {
    User findByUsername(String username);
    User getByUsernameAndPassword(String username,String password);
}
