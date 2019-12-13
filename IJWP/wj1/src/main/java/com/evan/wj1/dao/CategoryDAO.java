package com.evan.wj1.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.evan.wj1.pojo.Category;

public interface CategoryDAO extends JpaRepository<Category, Integer> {

}
