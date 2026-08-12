package com.foodsafe.supplierquery.repository;

import com.foodsafe.supplierquery.entity.Supplier;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SupplierRepository extends JpaRepository<Supplier, Long> {
}
