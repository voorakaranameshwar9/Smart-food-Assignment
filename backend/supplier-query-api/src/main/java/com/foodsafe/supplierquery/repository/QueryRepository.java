package com.foodsafe.supplierquery.repository;

import com.foodsafe.supplierquery.entity.Query;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QueryRepository extends JpaRepository<Query, Long> {

    List<Query> findBySupplierId(Long supplierId);

    List<Query> findByStatus(String status);
}
