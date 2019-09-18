package com.gmail.shabannikitka.crowdfunding.core.entity;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "campaign")
public class Campaign {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "summary")
    private String summary;

    @Column(name = "target")
    private double target;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name = "date_from")
    private LocalDate from;

    @Column(name = "date_to")
    private LocalDate to;

    @Column(name = "image_path")
    private String imagePath;

    public Campaign() {
    }

    public Campaign(String name, String summary, double target, User user, LocalDate from, LocalDate to) {
        this();
        this.name = name;
        this.summary = summary;
        this.target = target;
        this.user = user;
        this.from = from;
        this.to = to;
    }

    public Campaign(String name, String summary, double target, User user, LocalDate from, LocalDate to, String imagePath) {
        this(name, summary, target, user, from, to);
        this.imagePath = imagePath;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public double getTarget() {
        return target;
    }

    public void setTarget(double target) {
        this.target = target;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public LocalDate getFrom() {
        return from;
    }

    public void setFrom(LocalDate from) {
        this.from = from;
    }

    public LocalDate getTo() {
        return to;
    }

    public void setTo(LocalDate to) {
        this.to = to;
    }

    public String getImagePath() {
        return imagePath;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }
}
