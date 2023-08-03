package com.ada.apjba.domain;



import jakarta.persistence.*;


@Entity
@Table(name="information")
public class Information {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name="name")
	private String name;
	@Column(name="owner")
	private String owner;
	@Column(name="periods")
	private int periods;
	@Column(name="period_per_year")
	private int perodsPerYear;
	@Column(name="start_year")
	 private int startYear;
	@Column(name="start_period")
	private int startPeriod;
	@Column(name="last_saved")
	private int lastSaved;
	@Column(name="type")
	private String type;
	@Column(name="cost")
	 private int cost;
	@Column(name="npv")
	private int npv;
	@Column(name="operational_cost")
    private int operationalCost;
	@Column(name="operational_cost_npv")
	private int operationalCostNpv;

	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getOwner() {
		return owner;
	}
	public void setOwner(String owner) {
		this.owner = owner;
	}
	public int getPeriods() {
		return periods;
	}
	public void setPeriods(int periods) {
		this.periods = periods;
	}
	public int getPerodsPerYear() {
		return perodsPerYear;
	}
	public void setPerodsPerYear(int perodsPerYear) {
		this.perodsPerYear = perodsPerYear;
	}
	public int getStartYear() {
		return startYear;
	}
	public void setStartYear(int startYear) {
		this.startYear = startYear;
	}
	public int getStartPeriod() {
		return startPeriod;
	}
	public void setStartPeriod(int startPeriod) {
		this.startPeriod = startPeriod;
	}
	public int getLastSaved() {
		return lastSaved;
	}
	public void setLastSaved(int lastSaved) {
		this.lastSaved = lastSaved;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public int getCost() {
		return cost;
	}
	public void setCost(int cost) {
		this.cost = cost;
	}
	public int getNpv() {
		return npv;
	}
	public void setNpv(int npv) {
		this.npv = npv;
	}
	public int getOperationalCost() {
		return operationalCost;
	}
	public void setOperationalCost(int operationalCost) {
		this.operationalCost = operationalCost;
	}
	public int getOperationalCostNpv() {
		return operationalCostNpv;
	}
	public void setOperationalCostNpv(int operationalCostNpv) {
		this.operationalCostNpv = operationalCostNpv;
	}



}
