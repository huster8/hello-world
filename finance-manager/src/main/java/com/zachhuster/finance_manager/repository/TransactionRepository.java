package com.zachhuster.finance_manager.repository;

import com.zachhuster.finance_manager.model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {
}
