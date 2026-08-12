package com.foodsafe.supplierquery.controller;

import com.foodsafe.supplierquery.entity.Query;
import com.foodsafe.supplierquery.entity.Supplier;
import com.foodsafe.supplierquery.repository.QueryRepository;
import com.foodsafe.supplierquery.repository.SupplierRepository;

import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/queries")
@CrossOrigin(origins = "http://localhost:5173")
public class QueryController {

    private final QueryRepository queryRepository;
    private final SupplierRepository supplierRepository;

    public QueryController(
            QueryRepository queryRepository,
            SupplierRepository supplierRepository
    ) {
        this.queryRepository = queryRepository;
        this.supplierRepository = supplierRepository;
    }

    @GetMapping
    public List<Query> getAllQueries() {
        return queryRepository.findAll();
    }

    @GetMapping("/{id}")
    public Query getQuery(@PathVariable Long id) {
        return queryRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Query not found"));
    }

    @GetMapping("/supplier/{supplierId}")
    public List<Query> getSupplierQueries(@PathVariable Long supplierId) {
        return queryRepository.findBySupplierId(supplierId);
    }

    @PostMapping
    public Query createQuery(@RequestBody QueryRequest request) {

        Supplier supplier = supplierRepository
                .findById(request.supplierId)
                .orElseThrow(() -> new RuntimeException("Supplier not found"));

        Query query = new Query();

        query.setSupplier(supplier);
        query.setSubject(request.subject);
        query.setQuestion(request.question);
        query.setType(request.type);
        query.setPriority(request.priority);
        query.setDueDate(request.dueDate);
        query.setStatus("PENDING");
        query.setSubmittedAt(LocalDateTime.now());

        return queryRepository.save(query);
    }

    @PutMapping("/{id}/resolve")
    public Query resolveQuery(@PathVariable Long id) {

        Query query = queryRepository
                .findById(id)
                .orElseThrow(() -> new RuntimeException("Query not found"));

        query.setStatus("RESOLVED");
        query.setResolvedAt(LocalDateTime.now());

        return queryRepository.save(query);
    }

    public static class QueryRequest {

        public Long supplierId;
        public String subject;
        public String question;
        public String type;
        public String priority;
        public LocalDate dueDate;
    }
}
